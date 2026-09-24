# Memory Log — Hitesh Rawat Portfolio

> **Instructions for the AI coding assistant working on this project:**
>
> This file is your persistent memory across chat sessions. The codebase and other planning docs (PRD, Architecture, Rules, Phases, Design) don't change often, but you need a fast way to know _where things stand_ without re-reading the whole project every time.
>
> **Update this file whenever you:**
>
> - Complete a phase or a meaningful chunk of work
> - Make a decision that deviates from the original docs (and why)
> - Hit a blocker or leave something half-finished
> - Learn something about the codebase that isn't obvious from the code itself
>
> **Format for each entry:** append, don't rewrite history. Use:
>
> ```
> ## {Date or Session Label}
> - Status: {what's done}
> - Next: {what to do next}
> - Notes: {gotchas, decisions, deviations from the plan}
> ```
>
> At the start of a new chat session, read this file first (before re-reading the whole codebase) to get oriented. Only dig into the actual code when this file doesn't answer your question.
>
> **Project-specific additions to the above:**
>
> - Record the real output of `npm run lint`, `npx tsc --noEmit`, and `npm run build` at the end of each phase. "Passed" without output is not a report.
> - Every claim you could not verify against the résumé or a repository goes in `docs/CONTENT-GAPS.md`, and gets a one-line mention here.
> - Log any dependency you add, with its justification, before installing it.

---

<!-- New entries go below this line -->

## 2026-09-16 — Phase 0

- Status: Existing files inventoried; only scaffold and Git history remain. User deletions recorded and preserved. Résumé visually read; seven repository names inspected, source/test presence and three live URLs checked. Evidence and gaps recorded in docs/.
- Next: Phase 1, fresh local Next.js scaffold.
- Notes: GitHub API resolves FleetPilot to TransitOps, superseding the scaffold's separate-repository assumption. AssetFlow domain serves FleetPilot, so omit it. Guardrails is fixed-window; no signed FASTag webhook found. Original PDF stays untouched. No application exists yet, so lint/type/build are not runnable in Phase 0 (no package.json); inventory/evidence checks exited 0 apart from corrected source-path lookups.
- Dependency justification before install: Next 15.5.25 (latest patched 15 registry version), React/ReactDOM 19.3, Tailwind/PostCSS 4.3.3, Zod 4.6.5, Resend 6.28.1 are the approved budget. TypeScript 5.9.3, ESLint 9.39.5 + matching next config, Prettier 3, React/Node types and tsx are dev tooling; tsx runs dependency-injected tests with Node's built-in test runner. No motion/UI/state library added.
- Deviation: Initialize files manually rather than run create-next-app over an existing Git/scaffold directory, preserving the user's planning files. Same requested App Router/src/Tailwind/strict stack. Stay local-only.
- Phase 1 dependency audit: npm reported Next's pinned PostCSS 8.4.31 vulnerable. Override compatible PostCSS 8.x to 8.5.28, rather than force a Next major upgrade. Add @eslint/eslintrc explicitly for Next 15 FlatCompat lint setup. ESLint 9 is upstream unsupported but retained for Next 15 config compatibility; record future maintenance migration. Re-run audit and full build after override.

## 2026-09-16 — Phase 1 complete

- Status: Next.js foundation, strict TS, Tailwind v4, every palette token, IBM Plex fonts, grid/type/spacing utilities, reduced-motion reset, env template and formatting installed. Local dev rendered and screenshot inspected; test page will be replaced in Phase 4.
- Checks (real output): lint: `> eslint .` (exit 0, no warnings after PostCSS config correction); TypeScript: no output, exit 0; test: `# tests 1 / # pass 1 / # fail 0`; build: `Compiled successfully in 33.7s`, `Generating static pages (4/4)`, routes / and /_not-found; exit 0. Initial workspace-lockfile warning fixed by explicit outputFileTracingRoot. npm install after patched override: `audited 339 packages ... found 0 vulnerabilities`.
- Next: Phase 2 typed evidence-backed content. Dev server stopped before further production builds.
- Notes: Extend Project with dataFlow, integrations and optional AI control details to cover the required 16 case-study sections without duplicated prose. No new runtime dependency required.

## 2026-09-16 — Phase 2 complete

- Status: Six fully typed source-backed projects, profile, five capability groups and shared ordering registry written. Nullable demos, attribution, educational disclaimer and AI limitations are explicit. Genuine AssetFlow asset and original résumé copied early so Phase 3 navigation can resolve real destinations; source PDF unchanged.
- Next: Phase 3 primitives and navigation shell.
- Checks (real output): lint: `> eslint .`, no diagnostics, exit 0; tsc: no diagnostics, exit 0; tests: `# tests 2 / # pass 2 / # fail 0`; build: `Compiled successfully in 2.6s`, `Generating static pages (4/4)`, exit 0.

## 2026-09-16 — Phase 3 complete

- Status: Primitives, branded shell/404 and real navigation destinations implemented. Browser checks at 320 and 1440 showed no overflow. Explicit modal Tab/Shift+Tab cycling verified, Escape closes and focus/aria-expanded restore. Native-only cycling failed in the in-app browser, so a small explicit boundary handler was added and re-tested.
- Next: Phase 4 homepage. Early destination pages use genuine registry/profile content; later phases enrich them rather than leave dead navigation.
- Checks (real output): lint: `> eslint .`, no warnings, exit 0; tsc: no output, exit 0; build: `Compiled successfully in 6.5s`, `Generating static pages (10/10)`, exit 0. Browser: `inDialog: true`, restored `focus: BUTTON`, `expanded: false`; widths 320/1440, scroll widths 305/1425.

## 2026-09-16 — Phase 4 complete

- Status: Complete recruiter-scan homepage: hero, weighted selected work, AI controls, five capability groups, about and contact CTA. Genuine AssetFlow screenshot loaded (670×377 display); other visuals are clearly labelled architecture, not fake screens. Hero aside only appears on desktop. Temporary project CTA anchors resolve in the real index until Phase 5 case routes replace them.
- Next: Phase 5 six full case studies.
- Checks (real output): lint `> eslint .` with no diagnostics; tsc no diagnostics; build `Compiled successfully in 3.7s`, `Generating static pages (10/10)`, exit 0. Browser: selected-work top 608.98px at 1440×900, all homepage hash anchors resolved, genuine image loaded, console error/warn list empty.

## 2026-09-16 — Phase 5 complete

- Status: Index enriched; six case studies pre-render with unique metadata and 16 required sections. Technical decisions, labelled diagrams, genuine media, scoped security/data evidence, integrations, test/deployment status, limitations and source links render from shared objects. Homepage CTAs now link directly to cases.
- Next: Phase 6 focus presentations.
- Checks (real output): lint no diagnostics, tsc no diagnostics, tests `# pass 2 / # fail 0`; build `Compiled successfully in 3.7s`, `Generating static pages (16/16)`, six SSG project paths, exit 0. Browser all six at 320: sections 16, h1 1, overflow false, broken shortcut anchors 0; console [] error/warn.

## 2026-09-16 — Phase 6 complete

- Status: Role-focused pages now use a shared server-rendered FocusProjects presentation and registry orderings. Full-stack prioritizes four systems; AI prioritizes three AI workflows with complete control/evaluation details then supporting systems. No duplicated case-study objects/prose in focus source.
- Next: Phase 7 contact service/form and résumé/motion verification.
- Checks (real output): lint no diagnostics, tsc no diagnostics; build `Compiled successfully in 3.8s`, `Generating static pages (16/16)` and complete route table (build successful). Following grep found no duplicated prose and exited 1 as expected; aggregate shell status therefore 1, not a build failure. Browser ordering and 4/6 case links correct, no overflow/console warnings.
- Phase 7 architecture refinement: /contact renders dynamically so missing/added credentials change the form at runtime rather than require a rebuild. All reading/case/focus pages remain static. Both API key and a valid configured recipient are required; no real emails will be sent in QA. Bounded hashed-IP process-memory limiter is best-effort, not distributed protection. SDK sends use an 8s response deadline and content/hour idempotency; timeout can leave delivery uncertain, so do not promise inbox delivery.

## 2026-09-16 — Phase 7 complete

- Status: Original résumé copy/filename/hash verified; PDF served HTTP 200 application/pdf. Shared client/server validation, accessible form states, honeypot, size/origin checks, bounded limiter, Resend adapter, timeout and sanitized errors implemented. No form without valid recipient/key; mailto always available. CSS feedback only; no reveal/transform animations or library added. Real inbox delivery deliberately not tested without credentials.
- Next: Phase 8 responsive/accessibility/SEO. DevTools media emulation is unavailable through the in-app browser, so reduced-motion is verified by CSS rule tests and no deferred content, not claimed as an emulated-browser pass.
- Checks (real output): lint and tsc no diagnostics, exit 0; tests `# tests 8 / # pass 8 / # fail 0`; build `Compiled successfully in 3.3s`, `Generating static pages (16/16)`, exit 0. Browser: credential-free form count 0, valid mailto; configured QA-only form invalid fields have descriptions, focus name, live error; console []. Actual missing-key POST 503 typed error, PDF 200; matching SHA256 56DE32EA…E769D4.
- Phase 8 tooling justification before use: Lighthouse 13.4.1 runs transiently through npm exec using bundled Node 24.19 (system Node 22.15 is below its engine requirement). No runtime dependency added. OG image will be a static Next ImageResponse route at /og-default.png using official IBM Plex TTF, not invented product imagery. Code-native SVG favicon; no image-generation dependency.
- Accessibility refinement: subtle design borders are retained for decoration; input/menu/secondary-button boundaries use the existing secondary text token to provide >=3:1 control contrast. Add min-width 44px to small navigation links. Social asset uses a generated static /og-default.png endpoint and favicon is SVG, equivalent to requested bitmap/ico without extra image tooling.
- Phase 8 visual QA: full-size AssetFlow repository capture reveals missing organization scope and empty metrics. Retire the copied media from the content model; use truthful architecture fallback. Earlier image-load checks were technically successful, but did not establish a working workflow. Fresh capture is a content gap; do not crop away the error or fabricate a replacement.
- AssetFlow attribution correction: GitHub contributors and README verify multi-author Odoo Hackathon work. Replace earlier personal-project framing with collaborative contributor; source résumé supports implemented platform work, not sole authorship. Update résumé summary accordingly. No source repository changed.
- Contributor API also confirms FleetPilot/TransitOps multi-author work; label collaborative. SwiftBill and both AI repos list only Hitesh at audit time. Do not infer granular authorship from source inspection.
- Phase 8 local QA discovered a second dev process writing .next while production preview used it, causing missing required-server-files.json / HTTP 500. Separate development artifacts (.next-dev) from production (.next), ignore both, rebuild and recheck. Stop only the production process started for this QA; do not kill unrelated/user-managed processes.

## 2026-09-16 — Phase 8 implementation complete; manual QA pending

- Status: Responsive/SEO implementation and automated QA complete. Corrected repeated matrix after PDF tab made viewport apply to the wrong active tab: final actual widths 320/375/430/768/1024/1280/1440 each tested on 13 routes (91 checks), zero failures. Main heading, metadata, touch targets and external rel/target all checked. Skip link keyboard focus outline solid and activates main. Social PNG inspected, sitemap 13 routes, robots and 404 verified. Native zoom shortcuts have no effect in in-app browser; text-only/200% resize and reduced-motion emulation remain manual checks, not claimed passes.
- Next: Phase 9 final lint/format/tests, link/console audit, handoff. Lighthouse home report generated with 100s but CLI temp cleanup EPERM; unscored logo visible-label mismatch needs correction.
- Checks (real output): lint/tsc no diagnostics, exit 0; tests `# tests 10 / # pass 10 / # fail 0`; final build `Compiled successfully in 4.5s`, `Generating static pages (20/20)`, exit 0. Browser 91 actual-width checks no failures; OG 200 image/png, sitemap 13 URLs, unknown project 404. Lighthouse report performance/accessibility/best-practices/SEO 100, no report runtimeError; process exit 1 only Windows temp-profile cleanup.

## 2026-09-16 — Phase 9 implementation complete; manual verification pending

- Status: Local implementation and documented final QA/handoff complete; manual checks remain explicitly open. Corrected logo accessible naming, no-JS form behavior, unknown-slug handling, initial contact metadata and conditional form loading. No commit, push, deployment, source-project changes or real emails.
- Follow-ups: LinkedIn access; native 200%/text-only resize and reduced-motion preference; real inbox delivery; fresh screenshots/redacted PDF decision; calibrated/deployed performance.
- Checks (real output): Prettier `All matched files use Prettier code style!`; lint `> eslint .`, no diagnostics; typecheck `> tsc --noEmit`, no diagnostics; tests `# tests 10 / # pass 10 / # fail 0`; build `Compiled successfully in 6.6s`, `Generating static pages (20/20)`, exit 0. Production browser 13 routes: h1=1, head description true, broken images/anchors=0, overflow=false, console []. npm audit --omit=dev `found 0 vulnerabilities`. Lighthouse attached CLI exit 0: final idle home 89/100/100/100, FleetPilot 86/100/100/100, contact 93/100/100/100; home/case performance gap retained/explained in QA.md (concurrent repeats 83/78). All reports slow-CPU warning; no performance guarantee.
- Cleanup: temporary configured/unconfigured production QA servers and workspace-profile headless Chrome stopped; temporary browser tabs closed and viewport reset. No unrelated processes stopped. Final documentation formatting check passed.

## 2026-09-19 — Portfolite frontend redesign complete

- Status: Recreated the public Portfolite composition natively around the existing verified portfolio content: compact dark navigation, centered display hero, original grayscale code-native decoration, staggered weighted project gallery, split About/Process/Capabilities sections and closing contact CTA. All six projects appear once. Owner-approved labelled placeholders reserve portrait, project and supporting media until genuine images are provided.
- Owner inputs: The private Framer copy has no changes from the public template. Process uses Understand the problem → Implement the system → Test and refine. No invented screenshots, testimonial, client logo, metric, booking link or deployment was added.
- Design decisions: Official unmodified Satoshi 400/500 files are fetched from Fontshare for local self-hosting and remain Git-ignored. Existing detailed case studies, AI controls, contact service, résumé and evidence-backed limitations remain intact. Mobile project layout preserves registry priority despite the independent desktop columns.
- Production correction: Final visual QA discovered `.next` retained the retired light token CSS. The environment blocked generated-cache deletion, so production output moved non-destructively to `.next-production`; development remains `.next-dev`. Fresh CSS contains `--color-background:#000`, the local-font mapping and no `#f7f5f1` token.
- Checks (real output): Prettier `All matched files use Prettier code style!`, exit 0; ESLint `> eslint .`, no diagnostics, exit 0; TypeScript `> tsc --noEmit`, no diagnostics, exit 0; Node `# tests 13 / # pass 13 / # fail 0`, exit 0. Final production build: `Compiled successfully in 5.4s`, `Generating static pages (20/20)`, six SSG project paths, exit 0. Direct bundle check: black token true, old light token false, local font true, six projects true.
- Browser: 52/52 route/viewport checks passed at 320/768/1024/1440 with black theme, one h1, main, no broken images and no overflow. Homepage hero is 44px mobile/92px desktop; desktop columns approximately 434/521/434px; mobile rendered order is FleetPilot, AssetFlow, SwiftBill, DealOS, Personal Ops Agent, AI Guardrails. Mobile menu focus trap/Escape, skip link, configured validation-only form, unconfigured mail fallback and themed 404 pass. No real email sent.
- Remaining: Replace explicit media placeholders with authentic captures/portrait when supplied. Manually verify native 200% zoom/text-only resize and reduced-motion/contrast OS preferences. Re-run Lighthouse for the redesigned UI on an idle calibrated/deployed target before making performance claims.
- Deployment/ownership: No deployment, commit, push, source-repository mutation or real external form submission. Deployment remains owner-managed.

## 2026-09-20 — Generated concept media

- Status: At the owner's request, generated and installed all eight non-portrait visuals: six project concepts plus engineering-process and technical-capabilities illustrations. The portrait remains a real-photo-only placeholder.
- Honesty boundary: Project assets are monochrome editorial system illustrations, not fake dashboards. Every project image is visibly captioned `AI-generated concept visual — not a product screenshot.` Supporting images also carry AI-generated captions. No readable UI copy, logo, metric, customer data or implementation claim appears inside the assets.
- Asset pipeline: Built-in image generation produced the source PNGs. Final project copies are quality-88 WebP files in `public/media/generated`; all eight are individually under 200KB and total under 750KB. Original generated files remain in the Codex generated-images directory as required by the image-generation workflow.
- Code: Populated each `Project.media`, populated process/capabilities in `design-media.ts`, retained `portrait: null`, and made `PortfolioImage` expose the provenance caption on homepage/supporting media.
- Checks (real output): Prettier completed with all files unchanged; ESLint `> eslint .`, no diagnostics; TypeScript `> tsc --noEmit`, no diagnostics; Node `# tests 14 / # pass 14 / # fail 0`; production build `Compiled successfully in 20.7s`, `Generating static pages (20/20)`, exit 0. Browser checks at 320/768/1440 found no homepage overflow, all six project visuals loaded in-view with captions, process/capabilities loaded on scroll, and the FleetPilot case image loaded at 700×639 with both relevant captions. Desktop/mobile visual inspection passed; portrait placeholder remains visible.

## 2026-09-21 — Project gallery repair and tailored UI concepts

- Status: Fixed the selected-work grid regression by making each project article span the full twelve-column gallery. Replaced the six generic monochrome project concepts with project-specific, source-grounded UI illustrations for FleetPilot, AssetFlow, SwiftBill, DealOS, Personal Ops Agent and AI Chat Guardrails. All use one warm editorial/cobalt visual system and retain the visible `AI-generated concept visual — not a product screenshot.` disclosure. No project claims or source résumé content changed.
- Assets: Built-in image generation produced six source PNGs retained in the Codex generated-images directory. Versioned quality-82 WebP copies live in `public/media/generated/*-ui-v2.webp`; each is 1360×1020 and under 50KB. Previous assets were preserved.
- Checks (real output): Prettier `All matched files use Prettier code style!`; ESLint and TypeScript no diagnostics; Node `# tests 14 / # pass 14 / # fail 0`; production build `Compiled successfully in 20.7s`, `Generating static pages (20/20)`, exit 0. Browser at 1440×900 and 390×844: six articles and images present, all images loaded, no article overlap and no horizontal overflow.
- Deployment/ownership: No commit, push, deployment, source-repository mutation or source résumé edit.

## 2026-09-21 — Supporting media and interaction polish

- Status: Replaced the dark 3D engineering-process and full-stack-capabilities renders with light editorial UI illustrations aligned to the project visual system. Replaced the large AI `<details>` disclosure with three always-visible, fully linked boundary cards and restyled text/contact links into coherent controls with unified arrows, borders, hover and focus states. The AI-generated captions remain visible; no content claims changed.
- Assets: Built-in image generation created `engineering-process-ui-v2.webp` (1122×1402, 42KB) and `technical-capabilities-ui-v2.webp` (1448×1086, 38KB). Original PNGs remain in the Codex generated-images directory and previous workspace assets were preserved.
- Checks (real output): Prettier `All matched files use Prettier code style!`; ESLint and TypeScript no diagnostics; Node `# tests 14 / # pass 14 / # fail 0`; `git diff --check` exit 0; production build `Compiled successfully in 6.2s`, `Generating static pages (20/20)`, exit 0. Browser inspection at 1440×900 and 390×844 confirmed both images load, three AI cards are present, the former details control is absent, all contact actions resolve, and there are no broken images or horizontal overflow.
- Deployment/ownership: No commit, push, deployment, source-repository mutation or source résumé edit.

## 2026-09-21 — Crafted portfolio-first information architecture

- Status: Revised the Crafted experiment from a studio/service-shaped presentation into Hitesh Rawat's personal engineering portfolio. Primary navigation now foregrounds Work, Experience, About and Résumé. The hero leads with Hitesh's name, role, verified LNMIIT context, availability and direct portfolio actions. FleetPilot, SwiftBill and Personal Ops Agent form Featured Work with visible authorship and representative decisions; AssetFlow, DealOS and AI Chat with Guardrails remain visible in More Projects and the canonical index. Experience/education now precede an evidence-linked engineering approach and project-linked skills/tools. The final CTA and Contact page are employment-focused.
- Public routes: Project index entries now expose role, representative decision and known limit. Case-study headers expose role, ownership, stack and evidence status before the detailed 16-section record; contribution is part of the shortcut navigation. Focus pages use personal framing and keep AI/full-stack routes discoverable outside the primary navigation. About is concise and personal. Existing project detail, attribution, limitations, generated-media labels, résumé, contact behavior, SEO, 404 and server-rendered content remain intact.
- Checks (real output): Prettier `All matched files use Prettier code style!`; ESLint `> eslint .`, no diagnostics; TypeScript `> tsc --noEmit`, no diagnostics; Node `# tests 15 / # pass 15 / # fail 0`; `git diff --check` exit 0; production build `Compiled successfully in 7.9s`, `Generating static pages (20/20)`, exit 0.
- Browser QA: 27/27 checks passed for home, project index, FleetPilot, SwiftBill, Personal Ops Agent, applied-AI focus, About, Contact and an unknown route at 390×844, 768×1024 and 1440×900: one H1, main landmark, no overflow, no broken images and no empty links. SwiftBill's educational notice remained visible at all three widths. Thirteen internal destinations plus the résumé PDF returned HTTP 200. Browser warning/error log was empty. Mobile dialog focus wrapped in both directions; Escape closed it and restored focus to Menu. Reduced-motion CSS tests remain green and identity/project content is server-rendered without animation dependency.
- Dependencies/deployment: No dependency added. No commit, push, deployment, Local checkout change, source-project mutation, résumé edit or email submission.

## 2026-09-21 — Compact footer and explicit AI controls

- Status: Replaced the repeated multi-column footer navigation with an 85px desktop / 113px mobile utility footer containing only copyright/location plus GitHub and LinkedIn. The homepage AI area remains an always-visible semantic section with no `<details>` or JavaScript disclosure. Its heading is now `How the AI stays controlled.` and each of the three linked project cards exposes the exact existing Task, Permissions, Human control, Evaluation and Limitation values.
- Checks (real output): Prettier `All matched files use Prettier code style!`; ESLint and TypeScript no diagnostics; Node `# tests 15 / # pass 15 / # fail 0`; production build `Compiled successfully in 5.9s`, `Generating static pages (20/20)`, exit 0. Browser at 1440×900 and 390×844: three AI cards, zero disclosure elements, all five evidence fields on each card, zero footer internal links, no horizontal overflow, and no browser warning/error logs.
- Scope: Only `SiteFooter.tsx`, `AILab.tsx`, and this memory entry changed. No dependency, media, project claim, contact behavior, commit, push, deployment, Local checkout change or email submission.

## 2026-09-24 — Inline closing contact form

- Status: Replaced the homepage's centered contact links with a split dark contact section based on the owner's visual reference. The configured state now shows the existing Resend form directly on the homepage, with name, email, subject and message fields. The subject is validated on client/server and included in the outbound email and idempotency key. `/contact` keeps the same delivery route and adds the subject field. Without a valid key and recipient, both pages retain a usable email link and do not show an unusable form. The homepage renders dynamically to follow runtime credentials.
- Checks (real output): Prettier formatted the changed files, exit 0; lint `> eslint .`, no diagnostics, exit 0; `npx tsc --noEmit`, no diagnostics, exit 0; tests `# tests 15 / # pass 15 / # fail 0`, exit 0; production build `Compiled successfully in 26.4s`, `Generating static pages (19/19)`, exit 0, homepage and contact shown as dynamic routes. Browser production preview with dummy, non-sending credentials: homepage displayed four fields; desktop and 390px mobile layout visually checked; empty submit showed four field errors and focused name. Credential-free preview showed the email fallback and no homepage form, with no mobile horizontal overflow (390px viewport, 375px document width). No real provider send was attempted.
- Remaining: Actual inbox delivery still requires owner-supplied `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in deployment settings, followed by a real delivery check. The existing contact-delivery gap remains in `docs/CONTENT-GAPS.md`. No dependency, commit, push, deployment, résumé change or external email submission.

## 2026-09-24 — Contact visual correction

- Status: Owner clarified that the reference supplied form structure, not its appearance. Kept the split layout and four fields, but restored the portfolio's warm neutral surface, dark type, cobalt accent, existing input treatment and existing button. Removed all reference-derived dark/peach contact tokens. The closing heading and supporting copy now match the portfolio's engineering-opportunity positioning.
- Checks (real output): lint `> eslint .`, no diagnostics, exit 0; `npx tsc --noEmit`, no diagnostics, exit 0; tests `# tests 15 / # pass 15 / # fail 0`, exit 0; build `Compiled successfully in 7.8s`, `Generating static pages (19/19)`, exit 0. Production browser preview with dummy non-sending credentials: desktop and 390px mobile visually inspected, four visible contact fields and cobalt submit button, no mobile horizontal overflow (390px viewport, 375px document width). No real message sent.

## 2026-09-24 — Contact delivery activated and verified locally

- Status: The owner supplied `rawathitesh2812@gmail.com` as the recipient and explicitly approved publishing `7455085375` as a phone link. The recipient is in ignored `.env.local`; a pre-existing ignored `.env` already held a Resend key. Removed a blank `.env.local` key override that had hidden the working key. The homepage and `/contact` now always render the form; without valid settings its fields/button are disabled with a clear notice. With settings, server validation sends the four fields to Resend, with optional `CONTACT_FROM_EMAIL` for a verified domain. Official GitHub Primer and LinkedIn [in] assets now appear alongside social links across the site.
- Integration finding: An initial live test hit a false same-origin rejection because Next's request URL used a local host alias. The origin check now accepts the browser's matching Host and protocol while rejecting foreign hosts. Added a regression test.
- Checks (real output): lint `> eslint .`, no diagnostics, exit 0; `npx tsc --noEmit`, no diagnostics, exit 0; tests `# tests 17 / # pass 17 / # fail 0`, exit 0; build `Compiled successfully in 8.5s`, `Generating static pages (19/19)`, exit 0. Browser at 390px: form and official logos loaded, phone link visible, no horizontal overflow (390px viewport, 375px document width). One labelled test submission via the browser returned `Message accepted for email delivery`; the owner confirmed it arrived in the specified Gmail inbox. Credential-free preview kept the form visible but disabled with a setup notice. No commit, push or deployment.
- Next: Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` on the deployment host and verify its delivery. If a custom sender is desired, verify its domain in Resend and set `CONTACT_FROM_EMAIL`. The local key was neither exposed nor modified.
