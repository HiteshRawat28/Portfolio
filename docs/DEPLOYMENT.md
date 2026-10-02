# Deployment runbook — Vercel

Prepared 2026-10-02. Nothing has been deployed by an assistant; the steps below need Hitesh's Vercel account. Vercel is the host chosen in `project_scaffold/Architecture.md`. The `main` branch of `HiteshRawat28/Portfolio` already contains the application at the repository root.

## What the repository already handles

- **Node version:** `engines.node` is `22.x`, so Vercel builds on Node 22 instead of drifting to a newer major.
- **Build output:** on Vercel the build writes to the default `.next`; locally it stays `.next-dev` / `.next-production` (see `next.config.ts`).
- **Fonts:** `prebuild` downloads Satoshi from Fontshare on every clean build, with three attempts per file. A Fontshare outage longer than that fails the build; redeploy once it recovers.
- **Canonical origin:** `NEXT_PUBLIC_SITE_URL` wins. When it is unset on Vercel, canonicals, Open Graph URLs, `sitemap.xml` and `robots.txt` use Vercel's production domain (`VERCEL_PROJECT_PRODUCTION_URL`) instead of localhost. Preview deployments therefore point canonicals at production, which is intended.
- **Security headers (production only):** `Content-Security-Policy` (same-origin only, `frame-ancestors 'none'`, `object-src 'none'`), `Strict-Transport-Security`, `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy` and `Permissions-Policy`. The CSP is skipped for PDFs so Chrome's built-in viewer can display the résumé.
- **Build warning:** a production Vercel build logs `Contact form will render disabled…` when the contact settings are missing or invalid.
- **CLI uploads:** `.vercelignore` keeps `.env*`, caches, QA profiles and the font cache out of `vercel deploy` uploads.

## First deployment

1. In Vercel, **Add New → Project**, import `HiteshRawat28/Portfolio`. Framework preset: Next.js. Leave the root directory, build command and output directory at their defaults.
2. Before the first deploy, add the environment variables below under **Settings → Environment Variables**.
3. Deploy. Pushes to `main` then deploy to production; other branches get preview URLs.

| Variable               | Environments                                                 | Value                                                                                                                                                             |
| ---------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`       | Production (Preview only if previews should send real email) | Copy from the local ignored `.env`. Mark it **Sensitive**. Never prefix with `NEXT_PUBLIC`.                                                                       |
| `CONTACT_TO_EMAIL`     | Same as the key                                              | The inbox in local `.env.local`. With Resend's test sender it must be the email that owns the Resend account.                                                     |
| `CONTACT_FROM_EMAIL`   | Optional                                                     | Leave unset to use `onboarding@resend.dev`. Set to an address on a domain verified in Resend before sending from your own domain.                                 |
| `NEXT_PUBLIC_SITE_URL` | Production                                                   | Optional until a custom domain exists. Set to the final origin, e.g. `https://example.com`, with no path. Static pages bake it in, so redeploy after changing it. |

Environment-variable changes apply only to new deployments. After editing any of them, use **Deployments → Redeploy**.

## Custom domain (optional)

1. **Settings → Domains**: add the domain and create the DNS records Vercel shows.
2. Set `NEXT_PUBLIC_SITE_URL` to `https://<domain>` and redeploy.
3. To send from that domain: add it in Resend, create its DNS records, wait for verification, set `CONTACT_FROM_EMAIL` (e.g. `portfolio@<domain>`), redeploy.

## Verify after each production deploy

- [ ] Build log: `Compiled successfully`, `Generating static pages (19/19)`, and no `Contact form will render disabled` warning.
- [ ] `/`, `/projects`, one case study, `/about`, `/resume`, `/contact` and an unknown URL (branded 404) load.
- [ ] View source on `/`: `<link rel="canonical">` and `og:url` use the production origin, not localhost.
- [ ] `/sitemap.xml` and `/robots.txt` use the production origin; `/og-default.png` renders.
- [ ] `/Hitesh-Rawat-Resume.pdf` opens inline in Chrome.
- [ ] `/googlec01748676e2dafde.html` returns the Google Search Console verification text; then click **Verify** in Search Console. Keep the file in `public/` — removing it un-verifies the property.
- [ ] Headers: `curl -sI https://<domain>/` shows `content-security-policy` and `strict-transport-security`.
- [ ] Browser console on the homepage and `/contact` shows no CSP violations.
- [ ] Contact: the form is enabled; submit one clearly labelled test message; confirm it arrives in the inbox.
- [ ] Lighthouse (mobile) against the deployed URL; record results in `docs/QA.md`. Local lab runs were 89 home / 86 FleetPilot.
- [ ] Manually confirm the LinkedIn link opens the expected profile.

## Rollback

**Deployments →** select the previous good production deployment **→ Instant Rollback**. Environment variables are not rolled back, so revert any changed values separately.

## Known hosted-environment limits

- **Rate limiting is per instance.** The in-memory limiter (5/hour/IP) resets on cold starts and is not shared between serverless instances. Vercel sets `x-forwarded-for` itself, so clients cannot spoof it. For stronger abuse protection, use a shared store or Vercel Firewall rules.
- **The homepage and `/contact` render on every request** (`force-dynamic`) to reflect contact settings. On Vercel those settings only change with a redeploy, so static rendering would be safe and faster. That is a separate performance change, not part of this runbook.
- **CSP allows inline scripts and styles.** Next's streamed page data uses inline scripts. Nonces would make every static page render per request. The policy still blocks third-party scripts, framing, plugins and foreign form targets.
- **Vercel Toolbar on previews:** the toolbar script comes from `vercel.live`, which the CSP blocks. Previews may log a CSP error for it; the site is unaffected.

## Self-hosting instead

`npm ci && npm run build && npm start` serves the production build from `.next-production` on `127.0.0.1:3000`. Put it behind a reverse proxy that terminates TLS and **overwrites** `X-Forwarded-For` and `X-Forwarded-Proto`; the rate limiter and origin check trust them. Set every variable above, including `NEXT_PUBLIC_SITE_URL`, because there is no Vercel fallback.
