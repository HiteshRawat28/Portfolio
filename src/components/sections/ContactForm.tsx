"use client";
// Client state handles accessible validation feedback and the asynchronous contact request only.
import { useEffect, useId, useRef, useState } from "react";
import {
  contactSchema,
  contactResponseSchema,
  fieldErrors,
} from "@/lib/validation";
import { Button } from "../primitives/Button";
export function ContactForm({
  appearance,
  available = true,
}: {
  appearance?: "inline";
  available?: boolean;
}) {
  const inline = appearance === "inline";
  const prefix = useId();
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);
  useEffect(() => {
    if (Object.keys(errors).length)
      form.current
        ?.querySelector<HTMLElement>('[aria-invalid="true"]')
        ?.focus();
  }, [errors]);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setErrors({});
    setStatus(null);
    const data = new FormData(event.currentTarget);
    const parsed = contactSchema.safeParse(Object.fromEntries(data));
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      setStatus({
        kind: "error",
        text: "Please correct the highlighted fields.",
      });
      return;
    }
    setBusy(true);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
        signal: controller.signal,
      });
      const payload: unknown = await response.json();
      const result = contactResponseSchema.safeParse(payload);
      if (!result.success) throw new Error("invalid response");
      if (result.data.ok && response.ok) {
        form.current?.reset();
        setStatus({
          kind: "success",
          text: "Message accepted for email delivery. Thank you for getting in touch.",
        });
      } else if (!result.data.ok) {
        setErrors(result.data.fields ?? {});
        setStatus({ kind: "error", text: result.data.error });
      } else throw new Error("unexpected status");
    } catch {
      setStatus({
        kind: "error",
        text: "Delivery could not be confirmed. Please use the email link; your message may already have been accepted.",
      });
    } finally {
      clearTimeout(timer);
      setBusy(false);
    }
  }
  const inputClass =
    "feedback mt-2 min-h-12 w-full rounded-button border border-border-strong bg-surface-elevated px-4 py-3 text-primary hover:border-accent focus-visible:border-accent";
  return (
    <form
      ref={form}
      onSubmit={submit}
      method="post"
      action="/api/contact"
      noValidate
      aria-busy={busy}
      className={`contact-form max-w-2xl ${inline ? "" : "mt-8 border-t border-border pt-8"}`}
    >
      {!available && (
        <p
          role="status"
          className="mb-6 border-l-2 border-accent pl-4 text-sm text-secondary"
        >
          Online sending is being set up. Please use the email link for now.
        </p>
      )}
      <fieldset disabled={busy || !available} className="grid gap-6">
        <legend className={inline ? "sr-only" : "mb-6 text-xl font-semibold"}>
          Send a message
        </legend>
        {[
          {
            key: "name",
            label: "Your name",
            type: "text",
            autoComplete: "name",
            maxLength: 80,
          },
          {
            key: "email",
            label: "Email address",
            type: "email",
            autoComplete: "email",
            maxLength: 254,
          },
        ].map((field) => (
          <div key={field.key}>
            <label
              htmlFor={`${prefix}-${field.key}`}
              className="text-sm font-medium"
            >
              {field.label} <span className="sr-only">(required)</span>
            </label>
            <input
              id={`${prefix}-${field.key}`}
              name={field.key}
              type={field.type}
              autoComplete={field.autoComplete}
              maxLength={field.maxLength}
              required
              placeholder={
                inline
                  ? field.key === "name"
                    ? "Your name"
                    : "you@example.com"
                  : undefined
              }
              aria-invalid={Boolean(errors[field.key])}
              aria-describedby={
                errors[field.key] ? `${prefix}-${field.key}-error` : undefined
              }
              className={inputClass}
            />
            {errors[field.key] && (
              <p
                id={`${prefix}-${field.key}-error`}
                className="mt-2 text-sm text-error"
              >
                Error: {errors[field.key]}
              </p>
            )}
          </div>
        ))}
        <div>
          <label htmlFor={`${prefix}-subject`} className="text-sm font-medium">
            What do you have in mind?{" "}
            <span className="sr-only">(required)</span>
          </label>
          <input
            id={`${prefix}-subject`}
            name="subject"
            type="text"
            maxLength={120}
            required
            placeholder={inline ? "A role, a project, a good idea…" : undefined}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={
              errors.subject ? `${prefix}-subject-error` : undefined
            }
            className={inputClass}
          />
          {errors.subject && (
            <p
              id={`${prefix}-subject-error`}
              className="mt-2 text-sm text-error"
            >
              Error: {errors.subject}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${prefix}-message`} className="text-sm font-medium">
            A little more detail <span className="sr-only">(required)</span>
          </label>
          <textarea
            id={`${prefix}-message`}
            name="message"
            rows={inline ? 3 : 6}
            minLength={20}
            maxLength={5000}
            required
            placeholder={inline ? "Tell me about it…" : undefined}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={`${prefix}-message-hint${errors.message ? ` ${prefix}-message-error` : ""}`}
            className={inputClass}
          />
          <p
            id={`${prefix}-message-hint`}
            className="mt-2 text-xs text-secondary"
          >
            20–5,000 characters. Include the role or problem, team and relevant
            context.
          </p>
          {errors.message && (
            <p
              id={`${prefix}-message-error`}
              className="mt-2 text-sm text-error"
            >
              Error: {errors.message}
            </p>
          )}
        </div>
        <div className="sr-only" aria-hidden="true">
          <label htmlFor={`${prefix}-website`}>Website</label>
          <input
            id={`${prefix}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            maxLength={200}
          />
        </div>
        <p className="text-xs text-secondary">
          {available ? "Your" : "Once enabled, your"} name, email, subject and
          message go through Resend to Hitesh’s inbox. No portfolio database or
          analytics stores them. Avoid sensitive information.
        </p>
        <div className={inline ? "flex justify-end" : ""}>
          <Button type="submit" disabled={busy || !available} busy={busy}>
            {busy ? "Sending message…" : "Send message"}
            {inline && <span aria-hidden="true">↗</span>}
          </Button>
        </div>
      </fieldset>
      <div aria-live="polite" aria-atomic="true" className="mt-5 min-h-8">
        {status && (
          <p
            className={`text-sm ${status.kind === "success" ? "text-success" : "text-error"}`}
          >
            {status.kind === "error" ? "Error: " : ""}
            {status.text}
          </p>
        )}
      </div>
    </form>
  );
}
