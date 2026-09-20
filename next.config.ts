import type { NextConfig } from "next";
const config: NextConfig = {
  // Keep parallel local dev and production verification from overwriting each other's artifacts.
  distDir:
    process.env.NODE_ENV === "development" ? ".next-dev" : ".next-production",
  outputFileTracingRoot: process.cwd(),
  // Metadata is inexpensive/local. Keep it in <head> even on the dynamic contact route.
  htmlLimitedBots: /.*/,
  poweredByHeader: false,
  async headers() {
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
        ],
      },
    ];
  },
};
export default config;
