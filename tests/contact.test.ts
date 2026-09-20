import test from "node:test";
import assert from "node:assert/strict";
import { contactSchema } from "../src/lib/validation";
import { ContactRateLimiter } from "../src/lib/rate-limit";
import { handleContact } from "../src/lib/contact-service";
const message = {
  name: "Test Recruiter",
  email: "tester@example.org",
  message: "A test opportunity with enough context for validation.",
  website: "",
};
function request(
  body: unknown = message,
  headers: Record<string, string> = {},
) {
  return new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body),
  });
}
function deps(configured = true) {
  return {
    configured,
    limiter: new ContactRateLimiter(),
    send: async () => {},
    now: () => 10000,
  };
}
test("schema trims and rejects bad types, controls, short and long content", () => {
  assert.equal(
    contactSchema.parse({ ...message, name: " Test Recruiter " }).name,
    "Test Recruiter",
  );
  for (const body of [
    null,
    {},
    { ...message, email: "bad" },
    { ...message, name: "x" },
    { ...message, name: "Name\nInjection" },
    { ...message, message: "short" },
    { ...message, message: "a".repeat(5001) },
    { ...message, message: 20 },
    { ...message, message: "abc\u0000defghijklmnopqrstuvwxyz" },
  ])
    assert.equal(contactSchema.safeParse(body).success, false);
});
test("valid contact calls injected sender once with normalized input and stable idempotency", async () => {
  const keys: string[] = [];
  const config = {
    ...deps(),
    send: async (input: typeof message, key: string) => {
      assert.equal(input.email, message.email);
      keys.push(key);
    },
  };
  assert.equal((await handleContact(request(), config)).status, 200);
  assert.equal((await handleContact(request(), config)).status, 200);
  assert.equal(keys.length, 2);
  assert.equal(keys[0], keys[1]);
});
test("invalid JSON, invalid fields, size limits, origin and type are rejected", async () => {
  assert.equal((await handleContact(request({}), deps())).status, 400);
  assert.equal(
    (
      await handleContact(
        request(message, { origin: "https://elsewhere.example" }),
        deps(),
      )
    ).status,
    403,
  );
  assert.equal(
    (
      await handleContact(
        request(message, { "Content-Type": "text/plain" }),
        deps(),
      )
    ).status,
    415,
  );
  assert.equal(
    (
      await handleContact(
        request({ ...message, message: "a".repeat(17000) }),
        deps(),
      )
    ).status,
    413,
  );
  const malformed = new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: "{broken",
  });
  assert.equal((await handleContact(malformed, deps())).status, 400);
});
test("missing key and honeypot never send", async () => {
  let sent = 0;
  const config = {
    ...deps(false),
    send: async () => {
      sent++;
    },
  };
  assert.equal((await handleContact(request(), config)).status, 503);
  assert.equal(
    (await handleContact(request({ ...message, website: "bot" }), config))
      .status,
    200,
  );
  assert.equal(sent, 0);
});
test("limiter allows five, blocks sixth, expires and bounds memory", async () => {
  const limiter = new ContactRateLimiter(1);
  for (let i = 0; i < 5; i++)
    assert.equal(limiter.take("one", 0).allowed, true);
  assert.equal(limiter.take("one", 0).allowed, false);
  assert.equal(limiter.take("two", 0).allowed, false);
  assert.equal(limiter.take("two", 3600000).allowed, true);
  const config = deps();
  for (let i = 0; i < 5; i++) await handleContact(request(), config);
  const blocked = await handleContact(request(), config);
  assert.equal(blocked.status, 429);
  assert.equal(blocked.headers.get("Retry-After"), "3600");
});
test("provider failures and timeouts are sanitized", async () => {
  const original = console.error;
  console.error = () => {};
  try {
    const failed = await handleContact(request(), {
      ...deps(),
      send: async () => {
        throw new Error("SECRET provider payload");
      },
    });
    assert.equal(failed.status, 502);
    assert.doesNotMatch(await failed.text(), /SECRET/);
    const timed = await handleContact(request(), {
      ...deps(),
      timeoutMs: 5,
      send: () => new Promise(() => {}),
    });
    assert.equal(timed.status, 502);
  } finally {
    console.error = original;
  }
});
