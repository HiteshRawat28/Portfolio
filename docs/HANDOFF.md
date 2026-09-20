# Handoff — local portfolio

Current frontend design/configuration: see [Portfolite redesign](FRONTEND-REDESIGN.md). The initial design direction below is historical; backend/content architecture remains applicable.

## Design and information architecture

Editorial SaaS / Swiss-grid direction: warm neutral surfaces, graphite text, cobalt actions, teal only for the AI lab/focus. IBM Plex Sans 400/500/600 and Mono 400/500; 1200px responsive grid, thin borders, 2/4/8px radii. CSS-only feedback; no reveal animations, continuous motion, fake terminals, generated dashboards or template filler.

Routes: homepage; six-project index; six full case studies; full-stack and AI focus pages; about; résumé; contact; branded 404. Each study has 16 source-backed sections. Homepage weighs FleetPilot first instead of making three identical cards.

## Architecture and files

- `src/app/`: pages/layout, metadata, sitemap/robots, SVG favicon and static PNG social-image endpoint.
- `src/components/`: primitives, layout/menu, homepage/focus/contact sections, case-study presentations.
- `src/content/`: profile, five capabilities and six typed project records/ordering registry. Edit one project file to change all presentations.
- `src/lib/`: content types, metadata, motion conventions, shared validation, process-local limiter and injected contact service.
- `src/styles/tokens.css`: palette/motion/layout tokens; Tailwind utilities map semantic names in globals.css.
- `src/app/api/contact/route.ts`: thin server adapter for Resend. No separate Express application is needed for one dynamic endpoint. Public content remains static; /contact is dynamic to reflect credential availability at runtime.
- `public/Hitesh-Rawat-Resume.pdf`: byte-identical original copy. No phone/marks/full address rendered in HTML; PDF retains its original contents.
- `project_scaffold/`: planning and persistent AI-context documents. Root AGENTS.md is only an auto-discovery pointer.
- `docs/`: evidence, gaps, QA, licenses and handoff. `tests/`: Node built-in tests via tsx.

## Local setup

Use Node 22+ and npm. System environment verified with Node 22.15.0/npm 10.9.2. In the site directory run npm ci then npm run dev. Development/production artifact folders are intentionally separate. npm run build then npm start runs a production preview. A dev process already owning 3000 may make Next choose 3001; use the URL printed in the terminal.

Optional configuration: copy .env.example to .env.local, keeping it gitignored.

- RESEND_API_KEY: server-only key, never NEXT_PUBLIC.
- CONTACT_TO_EMAIL: email associated with the Resend account for the default onboarding sender. Do not put a recruiter's address here. The default domain cannot send to arbitrary recipients; see [Resend's restriction](https://resend.com/docs/knowledge-base/403-error-resend-dev-domain).
- NEXT_PUBLIC_SITE_URL: actual origin, without a path. Defaults to localhost:3000; set before your production build to generate correct canonicals, sitemap and social URLs. No remote domain is assumed or deployed.

No key/valid recipient means no form, only working contact links. The form requires JavaScript; without it, a noscript fallback hides the form and points to email rather than leaking a GET submission into the URL. Submitted data is plain text sent to Resend/inbox; no portfolio database or analytics retains it.

## Contact behavior and boundaries

Client and server share Zod validation. POST accepts JSON, rejects foreign Origin headers, malformed/oversized bodies, invalid types and controls; returns typed JSON and sanitized errors. Honeypot suppresses sending. Limiter allows five attempts/hour, hashes IPs with per-process salt, expires entries, caps stored buckets at 1000 and returns Retry-After.

This is best-effort instance-local throttling, not distributed protection. For self-hosting, configure a trusted proxy to replace client-supplied forwarded headers. Process restarts/multiple instances reset/divide limits; deployment-level abuse protection is future work. SDK responses have an 8s deadline; delivery after timeout may be uncertain. Content/hour idempotency reduces repeated-send duplicates but is not a permanent delivery ledger. Success means provider acceptance, not inbox delivery. Never log message bodies or credentials.

## Dependency decisions

Runtime: Next 15.5.25, React/ReactDOM 19.3, Zod 4.6.5, Resend 6.28.1. Styling/build: Tailwind/PostCSS 4.3.3. PostCSS overridden to 8.5.28 to fix the vulnerable Next-pinned version without a major framework rewrite. Strict TypeScript, ESLint 9/Next config, Prettier and tsx are dev tooling. ESLint 9 is now upstream unsupported; keep Next 15 compatibility today, plan a coordinated framework/linter migration later. Lockfile records exact resolved versions. No UI/state/motion library added.

Lighthouse 13.4.1 is transient QA tooling, run with bundled Node 24.19 because it requires >=22.19. It is not a runtime dependency. Official unmodified IBM Plex TTF supplies the social image; OFL license included.

## Verification and remaining work

See QA.md for measured checks and project_scaffold/Memory.md for actual per-phase outputs. No checks certify WCAG compliance, AI robustness, source-project security, production reliability or accounting correctness. Source-project tests were inspected, not run.

Before your deployment: set canonical origin; decide whether to redact the downloadable PDF; verify Resend delivery if enabling the form; perform native 200%/text-only resize and reduced-motion preference checks in a full browser; verify LinkedIn manually (LeetCode was browser-verified); obtain clean real workflow screenshots; correct AssetFlow's domain; attribute granular collaborative contributions using commits. Analytics stays deferred pending a privacy decision.

Metadata streaming is disabled because local metadata is inexpensive and must appear in the initial HTML head, including the dynamic contact page. The optional contact form uses a dynamically imported server wrapper, preserving SSR while deferring its client code when delivery is not configured. See [Next's metadata setting](https://nextjs.org/docs/15/app/api-reference/config/next-config-js/htmlLimitedBots) and [server-component lazy loading](https://nextjs.org/docs/15/app/guides/lazy-loading#importing-server-components).

The initial repository contained only scaffold/Git history and user-recorded deletions. Those were not restored wholesale or committed. No push, deployment, hosting configuration, secrets or source-project changes were performed.
