import { Resend } from "resend";
import { handleContact } from "@/lib/contact-service";
import { getContactConfig } from "@/lib/contact-config";
import { ContactRateLimiter } from "@/lib/rate-limit";
export const runtime = "nodejs";
const limiter = new ContactRateLimiter();
export async function POST(request: Request) {
  const config = getContactConfig();
  return handleContact(request, {
    configured: config.configured,
    limiter,
    send: async (input, idempotencyKey) => {
      if (!config.configured || !config.recipient || !config.sender)
        throw new Error("unconfigured");
      const result = await new Resend(config.key).emails.send(
        {
          from: `Hitesh Rawat Portfolio <${config.sender}>`,
          to: config.recipient,
          replyTo: input.email,
          subject: `Portfolio enquiry: ${input.subject}`,
          text: `Name: ${input.name}\nEmail: ${input.email}\nSubject: ${input.subject}\n\n${input.message}`,
        },
        { idempotencyKey },
      );
      if (result.error || !result.data?.id)
        throw new Error("provider rejected");
    },
  });
}
