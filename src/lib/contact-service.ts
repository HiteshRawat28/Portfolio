import { createHash } from "node:crypto";
import {
  contactSchema,
  fieldErrors,
  type ContactInput,
  type ContactResponse,
} from "./validation";
import { ContactRateLimiter } from "./rate-limit";
const maxBytes = 16384;
type Dependencies = {
  configured: boolean;
  send: (input: ContactInput, idempotencyKey: string) => Promise<void>;
  limiter: ContactRateLimiter;
  now?: () => number;
  timeoutMs?: number;
};
function json(
  data: ContactResponse,
  status = 200,
  headers: Record<string, string> = {},
) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}
async function readBody(request: Request): Promise<string> {
  const length = Number(request.headers.get("content-length"));
  if (Number.isFinite(length) && length > maxBytes)
    throw new Error("too-large");
  const reader = request.body?.getReader();
  if (!reader) return "";
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let size = 0;
  let text = "";
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > maxBytes) {
        await reader.cancel();
        throw new Error("too-large");
      }
      text += decoder.decode(chunk.value, { stream: true });
    }
    return text + decoder.decode();
  } finally {
    reader.releaseLock();
  }
}
export async function handleContact(
  request: Request,
  deps: Dependencies,
): Promise<Response> {
  const origin = request.headers.get("origin");
  const requestUrl = new URL(request.url);
  let sameOrigin = !origin || origin === requestUrl.origin;
  if (origin && !sameOrigin) {
    try {
      const submitted = new URL(origin);
      const host = request.headers.get("host");
      const forwardedProtocol = request.headers
        .get("x-forwarded-proto")
        ?.split(",")[0]
        ?.trim();
      sameOrigin =
        submitted.host === host &&
        submitted.protocol ===
          `${forwardedProtocol || requestUrl.protocol.slice(0, -1)}:`;
    } catch {
      sameOrigin = false;
    }
  }
  if (!sameOrigin)
    return json(
      { ok: false, error: "Submit from this website, or use the email link." },
      403,
    );
  if (
    request.headers.get("content-type")?.split(";")[0]?.trim().toLowerCase() !==
    "application/json"
  )
    return json({ ok: false, error: "Expected a JSON message." }, 415);
  const now = deps.now?.() ?? Date.now();
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const rate = deps.limiter.take(ip, now);
  if (!rate.allowed)
    return json(
      {
        ok: false,
        error: "Too many attempts. Please use email or try again later.",
      },
      429,
      { "Retry-After": String(rate.retryAfter) },
    );
  let body: unknown;
  try {
    body = JSON.parse(await readBody(request));
  } catch (error) {
    return json(
      {
        ok: false,
        error:
          error instanceof Error && error.message === "too-large"
            ? "Message is too large. Please use email."
            : "Could not read the message. Please check the form.",
      },
      error instanceof Error && error.message === "too-large" ? 413 : 400,
    );
  }
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success)
    return json(
      {
        ok: false,
        error: "Please correct the highlighted fields.",
        fields: fieldErrors(parsed.error),
      },
      400,
    );
  if (parsed.data.website) return json({ ok: true });
  if (!deps.configured)
    return json(
      {
        ok: false,
        error: "The form is unavailable. Please use the email link.",
      },
      503,
    );
  const input = parsed.data;
  const idempotencyKey = createHash("sha256")
    .update(
      JSON.stringify([
        input.name,
        input.email,
        input.subject,
        input.message,
        Math.floor(now / 3600000),
      ]),
    )
    .digest("hex");
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    await Promise.race([
      deps.send(input, idempotencyKey),
      new Promise<never>((_, reject) => {
        timer = setTimeout(
          () => reject(new Error("timeout")),
          deps.timeoutMs ?? 8000,
        );
      }),
    ]);
    return json({ ok: true });
  } catch (error) {
    console.error(
      "Contact delivery did not complete:",
      error instanceof Error && error.message === "timeout"
        ? "timeout"
        : "provider failure",
    );
    return json(
      {
        ok: false,
        error:
          "Delivery could not be confirmed. Please use email; your message may already have been accepted.",
      },
      502,
    );
  } finally {
    if (timer) clearTimeout(timer);
  }
}
