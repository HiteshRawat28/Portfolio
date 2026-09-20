# QA record — 2026-09-16

This record describes the initial light frontend. Portfolite redesign coverage is separately recorded in FRONTEND-REDESIGN.md and the newest Memory.md entry; do not carry these Lighthouse scores forward to the changed UI.

## Automated and browser coverage

- Strict TypeScript, ESLint, formatting, production build and Node tests: final output recorded in project_scaffold/Memory.md.
- Thirteen public pages checked at actual widths 320, 375, 430, 768, 1024, 1280, 1440 (91 route/width checks): no horizontal overflow; one main h1; description/canonical/OG/Twitter present; visible targets >=44px; external target/rel attributes correct.
- Initial matrix was discarded: a separate PDF tab received viewport changes. Repeated with PDF tab closed and asserted each actual width; 13 checks per width, zero failures.
- Six case studies: 16 sections each, correct title, no broken shortcut anchors. Unknown project returns branded 404 with home/projects links.
- Keyboard: explicit mobile forward/backward cycling, Escape, close focus restoration and aria-expanded verified. Skip-link focus outline solid; Enter focuses main. Contact invalid fields have linked descriptions, aria-invalid, first-field focus and live error text.
- Contact tests cover normalized input, bad types, controls, min/max, malformed JSON, oversized body, request type/origin, honeypot, missing config, limiter exhaustion/expiry/cap, Retry-After, idempotency, sanitized provider failures and timeout. Injected sender only; no real email sent.
- Original/copied PDF SHA256 match; served 200 application/pdf with professional download filename. In-app PDF viewer exposes no document text; original was rendered/visually inspected with PDF tools.
- Text colors pass AA contrast on intended warm/white surfaces. Interactive boundaries use stronger existing token. CSS-only feedback and reduced-motion reset tested; no deferred content or transform/reveal animation exists.
- Social PNG returned 200 image/png and visually inspected at 1200x630; sitemap contains 13 URLs, robots disallows /api.

## Known QA limitations

- Native 200% zoom/text-only resize and media preference emulation unavailable in in-app browser. Narrow reflow is measured, but these remain explicit manual checks.
- Actual inbox delivery and browser success/error UI against the live Resend provider require configuration/consent. Service success/failure paths use mocks, not fake delivery claims.
- LeetCode was verified in the browser despite HTTP restrictions. LinkedIn returned no usable profile body, so manual verification remains. Do not label it dead solely from an automated restriction.
- Lighthouse home initially generated 100/100/100/100, but process exit was 1 due Windows temporary-profile cleanup EPERM after report generation. Report has no runtimeError. An unscored visible-label mismatch on the text HR logo was identified and corrected with a decorative vector mark. Subsequent audits attach to an owned Chrome process and exit 0.
- A parallel dev process overwrote shared .next artifacts and caused temporary 500s. Development cache now .next-dev; production .next. Rebuild restored required files and healthy routes. Never run stale production artifacts after a failed build.

No deployment, production load tests, security certification or formal AI evaluation is claimed.

Final QA improvements: vector HR mark avoids visible-text/accessible-name mismatch; no-JavaScript contact fallback hides the form and avoids GET data exposure; unknown project slugs use the standard notFound path rather than Next 15's noisy NoFallbackError path. All six known case studies still pre-render.

The final contact fix keeps metadata in the initial HTML head and dynamically imports the server form wrapper. The default contact HTML does not load a contact-page client script. With dummy server-only credentials, the form still renders and an empty submission focuses the name, marks all three fields invalid and announces the linked errors. No real message was submitted.

Final-build browser regression: all 13 pages have one main h1, a head description, no broken image or shortcut anchors, and no overflow; captured console contains no new warnings/errors. Eleven unique external destinations were opened: GitHub and repository pages, two published demos, and LeetCode verified; LinkedIn remains restricted. Target/rel attributes were checked across the responsive matrix. Direct destination navigation is not a claim that every duplicate link was clicked; the in-app browser did not expose a new tab for a representative target-blank click.

Dead-code sweep: no TODO/FIXME UI, abandoned application imports, commented-out implementation or unused runtime dependencies found. Required primitives, including MediaFrame, remain wired into presentations; media arrays are intentionally empty until clean captures are available. ESLint and TypeScript pass. npm audit --omit=dev reports zero vulnerabilities; this is not a security audit.

## Final mobile Lighthouse measurements

Lighthouse 13.4.1, default mobile simulated throttling, local production Next build. Reports are in docs/qa; no deployment was used. All attached runs exited 0 with no runtimeError. Scores are local lab measurements, not real-user performance guarantees.

| Page / run                                         | Performance | Accessibility | Best practices | SEO | LCP  | TBT   |
| -------------------------------------------------- | ----------- | ------------- | -------------- | --- | ---- | ----- |
| Home, final regression concurrent with browser QA  | 83          | 100           | 100            | 100 | 2.1s | 620ms |
| FleetPilot, same sequence                          | 78          | 100           | 100            | 100 | 2.2s | 880ms |
| Home, repeated without concurrent browser QA       | 89          | 100           | 100            | 100 | 2.3s | 380ms |
| FleetPilot, repeated without concurrent browser QA | 86          | 100           | 100            | 100 | 2.1s | 520ms |
| Contact, after metadata/form-loading fix           | 93          | 100           | 100            | 100 | 2.1s | 290ms |

Home and FleetPilot remain below the 90 performance target on the final build; this gap is explained, not silently marked as a passing score. Every run warns that this device's CPU is slower than Lighthouse expects (benchmark indexes approximately 916–992). Rendering remains quick and CLS is 0, but blocking time from JavaScript/hydration varies substantially. Next's shared First Load JS budget is 103kB; this is an optimization follow-up, not proof that the CPU warning explains every delay. Do not tune throttling just to raise the score. Repeat on an idle calibrated device and on your deployed origin, inspect the main-thread trace/link prefetch costs, and measure real-user web vitals before claiming a performance guarantee.

The previous contact report scored 87/100/100/91 because initial-head metadata was missing and more optional code loaded. The final contact report fixes SEO to 100 and records performance 93. Earlier home/flagship passes above 90 are not substituted for the final repeated results.

## Portfolite redesign verification — 2026-09-19

- Fresh production output uses `.next-production`; direct CSS inspection found the black background token and local Satoshi mapping, with no retired light background token. This non-destructively bypasses the obsolete `.next` cache discovered during final visual QA.
- Optimized build compiled successfully and generated 20/20 pages, including all six static case-study paths.
- Browser matrix: 13 page routes at 320, 768, 1024 and 1440 pixels (52 checks), zero failures for theme, route, main landmark, single h1, broken images or horizontal overflow.
- Homepage: 44px mobile hero, 92px desktop hero, six project frames, mobile registry order preserved, and desktop gallery columns computed at approximately 434/521/434px at a 1440px viewport.
- Keyboard: mobile menu cycles backward from Close to the final résumé link and forward to Close; Escape closes the dialog, restores Menu focus and resets `aria-expanded`. Skip link has a visible solid focus outline and moves focus to `main`.
- Contact: default local configuration renders no form and exposes the direct mail link. A temporary dummy server configuration rendered the form; an empty validation attempt focused name, marked name/email/message invalid with linked descriptions and announced the polite live error. It did not reach the API or send a message.
- Unknown project path renders the themed 404. Desktop and mobile homepage screenshots were visually inspected. Native 200% zoom/text-only resize and media-preference emulation remain manual checks.
- The earlier Lighthouse table remains historical and must not be presented as a score for this redesigned frontend.

## Generated-media verification — 2026-09-20

- Eight monochrome concept illustrations were generated and visually inspected: FleetPilot, AssetFlow, SwiftBill, DealOS, Personal Ops Agent, AI Guardrails, engineering process and technical capabilities.
- Assets contain no readable product copy, logos, brands, performance figures or claims. Project visuals are explicitly captioned `AI-generated concept visual — not a product screenshot.` Supporting visuals are also labelled AI-generated.
- Original PNGs were converted locally to quality-88 WebP. Each checked-in file is below 200KB; all content records retain the original intrinsic dimensions and descriptive alternative text.
- The professional portrait remains a labelled placeholder. No synthetic portrait was created.
- Rendered homepage checks at 320, 768 and 1440 pixels found no horizontal overflow; all six project visuals load when in or near the viewport, preserve the registry order and expose the provenance caption. The process and capabilities assets load on scroll and fit their 4:5 and 4:3 frames. FleetPilot's case-study media loads at 700×639 with both the architecture and generated-visual captions present. Desktop and mobile screenshots were visually inspected.
