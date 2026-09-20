import { Resend } from "resend";
import { z } from "zod";
import { handleContact } from "@/lib/contact-service";
import { ContactRateLimiter } from "@/lib/rate-limit";
export const runtime = "nodejs";
const limiter = new ContactRateLimiter();
export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY?.trim();
  const recipient = z.email().safeParse(process.env.CONTACT_TO_EMAIL?.trim());
  return handleContact(request, {
    configured: Boolean(key && recipient.success),
    limiter,
    send: async (input, idempotencyKey) => {
      if (!key || !recipient.success) throw new Error("unconfigured");
      const result = await new Resend(key).emails.send(
        {
          from: "Portfolio <onboarding@resend.dev>",
          to: recipient.data,
          replyTo: input.email,
          subject: `Portfolio enquiry from ${input.name}`,
          text: `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}`,
        },
        { idempotencyKey },
      );
      if (result.error || !result.data?.id)
        throw new Error("provider rejected");
    },
  });
}
