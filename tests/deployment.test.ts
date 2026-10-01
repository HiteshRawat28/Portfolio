import test from "node:test";
import assert from "node:assert/strict";
import { resolveSiteOrigin } from "../src/lib/metadata";
import { getPathMatch } from "next/dist/shared/lib/router/utils/path-match";
import config, { contentSecurityPolicy } from "../next.config";

test("canonical origin prefers explicit config, then Vercel's production host", () => {
  assert.equal(resolveSiteOrigin({}), "http://localhost:3000");
  assert.equal(
    resolveSiteOrigin({ NEXT_PUBLIC_SITE_URL: "https://hitesh.dev/path/" }),
    "https://hitesh.dev",
  );
  assert.equal(
    resolveSiteOrigin({
      VERCEL_PROJECT_PRODUCTION_URL: "portfolio.vercel.app",
    }),
    "https://portfolio.vercel.app",
  );
  assert.equal(
    resolveSiteOrigin({
      NEXT_PUBLIC_SITE_URL: "https://hitesh.dev",
      VERCEL_PROJECT_PRODUCTION_URL: "portfolio.vercel.app",
    }),
    "https://hitesh.dev",
  );
  assert.equal(
    resolveSiteOrigin({
      NEXT_PUBLIC_SITE_URL: "javascript:alert(1)",
      VERCEL_PROJECT_PRODUCTION_URL: "portfolio.vercel.app",
    }),
    "https://portfolio.vercel.app",
  );
  assert.equal(
    resolveSiteOrigin({ NEXT_PUBLIC_SITE_URL: "  " }),
    "http://localhost:3000",
  );
});

test("production responses carry a same-origin CSP and HSTS; development stays eval-capable", async () => {
  const previous = process.env.NODE_ENV;
  const env = process.env as Record<string, string | undefined>;
  // Resolve headers for a path the way Next does: every matching rule applies.
  const headersFor = async (path: string) =>
    new Map(
      (await config.headers!())
        .filter((rule) => getPathMatch(rule.source)(path))
        .flatMap((rule) => rule.headers.map((h) => [h.key, h.value])),
    );
  try {
    env.NODE_ENV = "production";
    for (const path of ["/", "/projects/fleetpilot", "/og-default.png"]) {
      const production = await headersFor(path);
      assert.equal(
        production.get("Content-Security-Policy"),
        contentSecurityPolicy,
        path,
      );
      assert.ok(production.get("Strict-Transport-Security"), path);
    }
    const pdf = await headersFor("/Hitesh-Rawat-Resume.pdf");
    assert.equal(pdf.has("Content-Security-Policy"), false);
    assert.equal(pdf.get("X-Content-Type-Options"), "nosniff");
    assert.match(contentSecurityPolicy, /frame-ancestors 'none'/);
    assert.match(contentSecurityPolicy, /object-src 'none'/);
    assert.doesNotMatch(contentSecurityPolicy, /unsafe-eval|https?:/);

    env.NODE_ENV = "development";
    const development = await headersFor("/");
    assert.equal(development.has("Content-Security-Policy"), false);
    assert.equal(development.get("X-Frame-Options"), "DENY");
  } finally {
    env.NODE_ENV = previous;
  }
});
