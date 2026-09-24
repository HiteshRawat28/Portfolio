import { z } from "zod";

export function getContactConfig() {
  const key = process.env.RESEND_API_KEY?.trim() ?? "";
  const recipient = z.email().safeParse(process.env.CONTACT_TO_EMAIL?.trim());
  const senderValue =
    process.env.CONTACT_FROM_EMAIL?.trim() || "onboarding@resend.dev";
  const sender = z.email().safeParse(senderValue);

  return {
    configured: Boolean(key && recipient.success && sender.success),
    key,
    recipient: recipient.success ? recipient.data : null,
    sender: sender.success ? sender.data : null,
  };
}
