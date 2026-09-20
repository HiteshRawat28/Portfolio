# Build Phases — Hitesh Rawat Portfolio

Ten phases. Each is independently buildable and testable. Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` at the end of every phase from Phase 2 onward, and append a `Memory.md` entry before moving on.

---

## Phase 0: Environment & Evidence Audit

**Goal:** Know the ground truth before writing a line of content or code.

**Done when:**

- [x] Working directory confirmed empty (or existing files inventoried and preserved); `git status` clean or recorded.
- [x] Résumé read from `C:\Users\Asus\Desktop\resume\resume updated.pdf`; verified facts extracted (name, LNMIIT CS undergrad, Jaipur, skills, Vivacity leadership, Odoo Hackathon, 300+ LeetCode). Phone/CGPA noted as _excluded from the site_.
- [x] Each repository inspected — README, folder structure, package manifests, route/middleware files, tests: `TransitOps`, the separate `FleetPilot` repo, `AssetFlow`, `SwiftBill`, `amartya1523/DealOS`, `Personal-ops-agent`, `AI-chat-App-with-Gaurdrails`.
- [x] Each live URL opened and status recorded: `fleet-pilot-khaki.vercel.app`, `asset-flow.ink`, `swift-bill-kappa.vercel.app`. Dead or sleeping demos flagged, not linked as working.
- [x] For each project: real authz enforcement located in backend code (or recorded as unverified), test presence recorded, integrations confirmed.
- [x] `docs/CONTENT-GAPS.md` created with every unverifiable claim and missing screenshot.
- [x] FleetPilot vs TransitOps duplication documented as a follow-up for Hitesh.

---

## Phase 1: Scaffold & Token System

**Goal:** A running Next.js app whose design language is defined before any page exists.

**Done when:**

- [x] Equivalent scaffold manually initialised (TS, App Router, Tailwind v4, ESLint, `src/`); existing docs preserved; Prettier configured.
- [x] `src/styles/tokens.css` contains every semantic token from `Design.md`; `globals.css` maps them via `@theme`.
- [x] IBM Plex Sans + IBM Plex Mono loaded via `next/font/google` with the weights listed in `Design.md`; no other family loads.
- [x] Type scale, spacing scale, container, and grid utilities defined and applied to a throwaway test page.
- [x] `prefers-reduced-motion` global reset in place; motion duration/easing tokens in `src/lib/motion.ts`.
- [x] `.env.example` created; `.env.local` gitignored.
- [x] `npm run dev` renders; `npm run build` passes.

---

## Phase 2: Content Layer

**Goal:** All verified project content typed and structured — no UI yet.

**Done when:**

- [x] `src/lib/types.ts` defines `Project` with: `slug`, `name`, `repoName`, `shortDescription`, `fullSummary`, `role`, `collaborationType`, `problem`, `users`, `responsibilities`, `constraints`, `technicalDecisions`, `technologies`, `architecture`, `security`, `testing`, `deployment`, `outcomes`, `limitations`, `nextSteps`, `repositoryUrl`, `liveUrl` (nullable), `media` (possibly empty), `featured`, `categories`.
- [x] Six project files written from Phase 0 evidence only, plus `profile.ts` and `capabilities.ts` (five groups, no percentages).
- [x] `content/projects/index.ts` exports the registry plus `getProject(slug)`, `homepageOrder`, `fullStackOrder`, `aiOrder`.
- [x] Every `liveUrl` and `repositoryUrl` verified reachable; unverified ones set to `null`.
- [x] SwiftBill disclaimer, DealOS team framing, and FleetPilot naming rule present in the data.
- [x] `tsc --noEmit` clean — no missing required fields.

---

## Phase 3: Primitives & Layout Shell

**Goal:** The reusable vocabulary every page will be built from.

**Done when:**

- [x] Primitives built and token-driven: Container, Section, Stack, Grid, Heading, Text, Button, TextLink, Tag, Divider, MediaFrame, ProjectMeta, AccessibleIcon, VisuallyHidden.
- [x] `layout.tsx` provides skip link, `<header>`, `<main id="main">`, `<footer>` landmarks and base metadata.
- [x] SiteHeader: Work / AI Lab / About / Résumé / Contact, one primary action, GitHub + LinkedIn without crowding; current/hover/focus states distinct.
- [x] MobileMenu: keyboard-operable, focus trapped while open, focus restored to the trigger on close, Escape closes, `aria-expanded` correct.
- [x] SiteFooter: name, navigation, GitHub, LinkedIn, résumé, copyright.
- [x] `not-found.tsx` designed and in-brand.
- [x] Header and footer verified at 320px and 1440px with no overflow.

---

## Phase 4: Homepage

**Goal:** The 60-second recruiter scan works.

**Done when:**

- [x] Hero: eyebrow, headline, supporting copy, "View selected work" primary CTA, "View résumé" secondary, GitHub/LinkedIn/LeetCode links. No banned phrases, no typewriter effect.
- [x] Selected Work: FleetPilot full-width flagship treatment; AssetFlow and SwiftBill as weighted editorial entries — deliberately not three identical cards.
- [x] AI Engineering Lab: Personal Ops Agent + AI Chat with Guardrails (+ FleetPilot Copilot), visually related but distinct, each showing task, provider, tool permissions, HITL, guardrails, observability, failure handling, eval status, limitations.
- [x] Capabilities: five grouped categories, no bars, no logo wall.
- [x] About: concise — LNMIIT, Jaipur, working style, Vivacity, Odoo Hackathon, LeetCode as a supporting line.
- [x] Contact CTA + footer in place.
- [x] Hero sized so Selected Work is reachable immediately; heading order h1→h2→h3 with no skips.
- [x] Real screenshots used where captured; otherwise a designed text/architecture block that does not imitate a screenshot.

---

## Phase 5: Case Studies

**Goal:** Depth that survives a hiring manager's read.

**Done when:**

- [x] `/projects` index renders all six from the registry.
- [x] `/projects/[slug]` pre-renders all six via `generateStaticParams`, each with unique `generateMetadata`.
- [x] Each case study covers all 16 required sections (summary → problem → users/roles → contribution → constraints → architecture → decisions → authn/authz → data & transactions → integrations → testing → deployment → verifiable outcomes → limitations → next steps → real links).
- [x] Judgment and trade-offs are explained; no README feature-list dumps.
- [x] Any architecture diagram is labelled, responsive, token-styled, and readable at 320px — omitted where it adds nothing.
- [x] DealOS framed as team/hackathon work throughout; SwiftBill disclaimer visible; no unverified security claims.

---

## Phase 6: Focus Pages

**Goal:** Role-targeted entry points with zero content duplication.

**Done when:**

- [x] `/focus/full-stack` — FleetPilot, AssetFlow, SwiftBill, DealOS; emphasis on ownership, APIs, data design, authorization, multi-tenancy, transactions, testing, deployment.
- [x] `/focus/ai-applications` — FleetPilot Copilot, Personal Ops Agent, AI Chat with Guardrails, then supporting systems; emphasis on AI inside a real workflow, tool permissions, HITL, guardrails, observability, evaluation, failure handling, privacy boundaries.
- [x] Both read the shared registry; only intro copy and ordering differ. A grep confirms no duplicated case-study prose.
- [x] Each entry links through to its full case study.

---

## Phase 7: Résumé, Contact & Motion

**Goal:** Close the loop on the two actions that matter, then add restraint-level polish.

**Done when:**

- [x] `Hitesh-Rawat-Resume.pdf` copied into `public/` (original untouched); `/resume` renders a summary plus a download action; the action also appears in header and footer.
- [x] Résumé PDF opens correctly and downloads with the professional filename; no phone number rendered anywhere on the site.
- [x] `/contact` shows email, LinkedIn, GitHub; form has real labels, shared Zod validation, honeypot, rate limiting, and loading/success/error states; `mailto:` fallback always visible.
- [x] `POST /api/contact` tested with valid, invalid, and missing-key inputs; no secret reaches the client bundle.
- [x] Motion added only where listed in `Design.md`; every animated component still correct with its wrapper removed.
- [x] Reduced-motion override verified by automated CSS checks; no transform/reveal/delayed-content animations. In-app browser lacks DevTools media emulation; manual emulated pass remains documented.

---

## Phase 8: Accessibility, Responsive & SEO

**Goal:** Meet the professional bar, measured rather than assumed.

**Done when:**

- [x] Inspected at 320 / 375 / 430 / 768 / 1024 / 1280 / 1440px — no horizontal overflow, deliberate grid collapse, readable line lengths, touch targets ≥ 44px.
- [x] Full keyboard pass: skip link works, focus always visible, tab order logical, no traps, mobile menu focus restored.
- [x] Contrast spot-checked against `Design.md` values; nothing communicated by colour alone.
- [ ] Native 200% browser zoom and text-only resize: manual follow-up. In-app browser does not support these controls; 320px reflow is verified.
- [x] Per-page titles, descriptions, canonicals, OG/Twitter tags; `/og-default.png` static image endpoint, SVG favicon, theme colour, `sitemap.ts`, `robots.ts` all present and correct.
- [x] Metadata reads "Hitesh Rawat — Full-Stack and AI Applications Engineer"; no unsupported credential claims.
- [x] Images sized with explicit dimensions and responsive sources; the LCP image is _not_ lazy-loaded.

---

## Phase 9: Verification & Handoff

**Goal:** Prove it works; document what's still missing.

**Done when:**

- [x] Prettier, ESLint, `tsc --noEmit`, and `npm run build` all pass; output pasted into `Memory.md`.
- [x] Every internal route opened; 11 unique external destinations navigated and target/rel checked. LeetCode verified; LinkedIn restriction documented. Do not claim every duplicate was clicked.
- [ ] LinkedIn profile body: manual access verification remains.
- [x] Console checked on every page: no errors, no hydration warnings, no missing assets, no broken anchors.
- [x] Lighthouse mobile run: home 89, FleetPilot 86, contact 93 performance; all other categories 100. Sub-90 gap and variation explained in docs/QA.md.
- [x] Dead code swept: unused imports, unused styles, abandoned components, dependencies added but unused.
- [x] `docs/CONTENT-GAPS.md` finalised — screenshots still needed, claims still unverified, follow-ups (FleetPilot/TransitOps repo reconciliation, résumé page-balance note, custom domain, analytics decision).
- [x] Handoff written: design direction, IA, files changed, tokens/components created, dependencies and justification, checks run, build result, a11y/responsive checks, pre-existing issues, missing content, intentional limitations, recommended next work.
