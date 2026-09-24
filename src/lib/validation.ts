import { z } from "zod";
const singleLine = (value: string) => !/[\u0000-\u001f\u007f]/.test(value);
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter at least 2 characters.")
    .max(80, "Use 80 characters or fewer.")
    .refine(singleLine, "Use a single-line name."),
  email: z
    .string()
    .trim()
    .max(254, "Email is too long.")
    .pipe(z.email("Enter a valid email address.")),
  subject: z
    .string()
    .trim()
    .min(3, "Enter at least 3 characters.")
    .max(120, "Use 120 characters or fewer.")
    .refine(singleLine, "Use a single-line subject."),
  message: z
    .string()
    .trim()
    .min(20, "Include at least 20 characters of context.")
    .max(5000, "Use 5,000 characters or fewer.")
    .refine(
      (value) => !/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value),
      "Remove unsupported control characters.",
    ),
  website: z.string().max(200).optional().default(""),
});
export type ContactInput = z.infer<typeof contactSchema>;
export const contactResponseSchema = z.discriminatedUnion("ok", [
  z.object({ ok: z.literal(true) }),
  z.object({
    ok: z.literal(false),
    error: z.string(),
    fields: z.record(z.string(), z.string()).optional(),
  }),
]);
export type ContactResponse = z.infer<typeof contactResponseSchema>;
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (
      typeof key === "string" &&
      ["name", "email", "subject", "message"].includes(key) &&
      !fields[key]
    )
      fields[key] = issue.message;
  }
  return fields;
}
