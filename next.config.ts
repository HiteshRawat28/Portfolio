import type { NextConfig } from "next";
import { getContactConfig } from "./src/lib/contact-config";

// Next's streamed RSC payload uses inline scripts; nonces would force every static page to render per request.
export const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

if (process.env.VERCEL_ENV === "production" && !getContactConfig().configured)
  console.warn(
    "Contact form will render disabled: set RESEND_API_KEY and CONTACT_TO_EMAIL in the Vercel production environment.",
  );

const config: NextConfig = {
  // Keep parallel local dev and production verification from overwriting each other's artifacts.
  // Hosted builds have no parallel processes, so Vercel keeps its default output folder.
  distDir:
    process.env.NODE_ENV === "development"
      ? ".next-dev"
      : process.env.VERCEL
        ? ".next"
        : ".next-production",
  outputFileTracingRoot: process.cwd(),
  // Metadata is inexpensive/local. Keep it in <head> even on the dynamic contact route.
  htmlLimitedBots: /.*/,
  poweredByHeader: false,
  async headers() {
    const production = process.env.NODE_ENV === "production";
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Browsers ignore HSTS over local HTTP.
          ...(production
            ? [{ key: "Strict-Transport-Security", value: "max-age=63072000" }]
            : []),
        ],
      },
      // Development needs eval for React Refresh. PDFs are skipped because a
      // document CSP can blank Chrome's built-in viewer for the résumé.
      ...(production
        ? [
            {
              source: "/:path((?!.*\\.pdf$).*)",
              headers: [
                {
                  key: "Content-Security-Policy",
                  value: contentSecurityPolicy,
                },
              ],
            },
          ]
        : []),
    ];
  },
};
export default config;
