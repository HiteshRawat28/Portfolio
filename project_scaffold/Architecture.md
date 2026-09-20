# Architecture — Hitesh Rawat Portfolio

## App Flow

**Reading flow (99% of traffic, fully static):**

1. Visitor lands on `/` → statically generated at build time, no client JS required to read it.
2. Hero states name + positioning; Selected Work gives FleetPilot the largest treatment.
3. Visitor clicks a project → `/projects/[slug]`, pre-rendered via `generateStaticParams()` from the shared project data.
4. Case study renders from the same typed project object that fed the homepage card — one source, many views.
5. Focus pages (`/focus/full-stack`, `/focus/ai-applications`) re-read the same data, apply a role-specific ordering array and intro copy, and render compact entries that link back to full case studies.
6. `/resume` renders a short summary and serves `/Hitesh-Rawat-Resume.pdf` from `public/`.

**Contact flow (the only dynamic path):**

1. User fills the form → client-side validation with the shared Zod schema → submit button enters loading state.
2. `POST /api/contact` → same Zod schema re-validates server-side → honeypot field checked → simple in-memory IP rate limit (5/hour) → Resend sends the message to Hitesh's inbox.
3. Route returns `{ ok: true }` or a typed error → UI renders success or error state with a `mailto:` fallback always visible.
4. If `RESEND_API_KEY` is absent (e.g. a fork or preview), the form is not rendered at all; the page shows the email link instead. No broken form is ever shipped.

## Tech Stack

| Layer      | Choice                                                    | Why                                                                                                                                                                                                                                                                                                                                              |
| ---------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Framework  | Next.js 15 (App Router) + React 19                        | Static generation by default, file-based routing matching the IA, first-class metadata/sitemap APIs, `next/image`, `next/font` self-hosting. Vercel-native.                                                                                                                                                                                      |
| Language   | TypeScript (strict)                                       | Typed project data is the whole content model; strict mode catches missing fields before they become empty sections.                                                                                                                                                                                                                             |
| Styling    | Tailwind CSS v4 + semantic CSS custom properties          | v4's CSS-first `@theme` lets tokens live as real CSS variables and be consumed as utilities. One system, no runtime CSS-in-JS, no extra dependency for theming.                                                                                                                                                                                  |
| Content    | Typed TS objects in `src/content/projects/*.ts`           | Six projects, one author, no publishing workflow. A CMS or MDX pipeline would be overhead. Types enforce case-study completeness.                                                                                                                                                                                                                |
| Backend    | One Next.js Route Handler (`/api/contact`)                | Only dynamic surface on the site. No server for static content.                                                                                                                                                                                                                                                                                  |
| Database   | None                                                      | Nothing to persist.                                                                                                                                                                                                                                                                                                                              |
| Auth       | None                                                      | Public site, no accounts.                                                                                                                                                                                                                                                                                                                        |
| Email      | Resend free tier (3,000/mo, 100/day)                      | API key stays server-side in an env var; no secret in the bundle. Sends from `onboarding@resend.dev` to Hitesh's own verified account email with no domain setup — exactly the contact-form case. Fallback option if signup is unwanted: Web3Forms (250/mo, no backend), but prefer Resend so the form demonstrates real server-side validation. |
| Validation | Zod                                                       | One schema shared by client and server.                                                                                                                                                                                                                                                                                                          |
| Motion     | Framer Motion, only if Phase 7 proves CSS insufficient    | CSS transitions + `@keyframes` cover the intended motion. Add the library only for the stagger/reveal orchestration, never both it and another motion lib.                                                                                                                                                                                       |
| Hosting    | Vercel                                                    | Free tier, preview deployments, native Next.js build.                                                                                                                                                                                                                                                                                            |
| Quality    | ESLint (`next/core-web-vitals`), Prettier, `tsc --noEmit` | Minimum viable gate; all three must pass before a phase is called done.                                                                                                                                                                                                                                                                          |

Dependency budget: `next`, `react`, `react-dom`, `tailwindcss`, `zod`, `resend`, plus dev tooling. Anything beyond this list needs a written justification in `Memory.md`.

## Folder Structure

```
hitesh-rawat-portfolio/
├── public/
│   ├── Hitesh-Rawat-Resume.pdf
│   ├── favicon.ico
│   ├── og-default.png
│   └── media/
│       └── {project-slug}/        # real screenshots only
├── src/
│   ├── app/
│   │   ├── layout.tsx             # fonts, skip link, header, footer, base metadata
│   │   ├── page.tsx               # homepage
│   │   ├── globals.css            # @theme tokens, base, utilities
│   │   ├── projects/
│   │   │   ├── page.tsx           # index
│   │   │   └── [slug]/page.tsx    # case study + generateStaticParams + generateMetadata
│   │   ├── focus/
│   │   │   ├── full-stack/page.tsx
│   │   │   └── ai-applications/page.tsx
│   │   ├── about/page.tsx
│   │   ├── resume/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── api/contact/route.ts
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── primitives/            # Container, Section, Stack, Grid, Heading, Text,
│   │   │                          # Button, TextLink, Tag, Divider, MediaFrame,
│   │   │                          # ProjectMeta, AccessibleIcon, VisuallyHidden
│   │   ├── layout/                # SiteHeader, MobileMenu, SiteFooter, SkipLink
│   │   ├── sections/              # Hero, SelectedWork, ProjectFeature, AILab,
│   │   │                          # Capabilities, About, ContactCTA
│   │   └── case-study/            # CaseStudyHeader, CaseStudySection, DecisionList,
│   │                              # LimitationsList, ArchitectureDiagram
│   ├── content/
│   │   ├── projects/
│   │   │   ├── fleetpilot.ts
│   │   │   ├── assetflow.ts
│   │   │   ├── swiftbill.ts
│   │   │   ├── dealos.ts
│   │   │   ├── personal-ops-agent.ts
│   │   │   ├── ai-guardrails.ts
│   │   │   └── index.ts           # registry + ordering helpers
│   │   ├── profile.ts             # name, bio, education, links, email
│   │   └── capabilities.ts
│   ├── lib/
│   │   ├── types.ts               # Project, Capability, Profile
│   │   ├── metadata.ts            # buildMetadata() helper
│   │   ├── motion.ts              # duration/easing tokens
│   │   └── validation.ts          # contact Zod schema
│   └── styles/
│       └── tokens.css             # semantic tokens (imported by globals.css)
├── docs/
│   └── CONTENT-GAPS.md            # running list of unverifiable/missing evidence
├── PRD.md · Architecture.md · Rules.md · Phases.md · Design.md · Memory.md
├── .env.example                   # RESEND_API_KEY=, CONTACT_TO_EMAIL=
├── .env.local                     # gitignored
└── next.config.ts · tsconfig.json · eslint.config.mjs · .prettierrc
```

## Key Architectural Decisions

- **One project registry, three presentations.** Homepage cards, case studies, and focus pages all read `src/content/projects/`. Focus pages hold only an ordering array + intro copy. Adding a project means editing one file.
- **`Project` type enforces honesty.** Required fields include `limitations` and `nextSteps`; `liveUrl` and `media` are explicitly nullable so an absent demo renders a designed text/architecture block instead of a fake screenshot.
- **Tokens in `tokens.css`, consumed via `@theme`.** Components never hardcode hex values. This is what makes a later dark theme a token-file change rather than a rewrite.
- **Static-first.** Every page except `/api/contact` is statically generated. Client components are opt-in and limited to the mobile menu, the contact form, and any motion wrapper.
- **`FleetPilot` (display) → `TransitOps` (repo).** Verified on 2026-09-16: `github.com/HiteshRawat28/TransitOps` is the substantive repo (58 commits; `backend/`, `frontend/`, `mobile/`, `docs/`, `docker-compose.yml`; homepage `fleet-pilot-khaki.vercel.app`). A _second_, separate `FleetPilot` repo is also pinned on the profile. The site displays "FleetPilot" (matching the résumé) and links to `TransitOps`. Reconciling the two repositories is Hitesh's decision, recorded as a follow-up — the portfolio build does not rename or modify either repo.
- **Contact form degrades, never breaks.** Missing env key → email link only. This avoids the classic portfolio failure of a form that silently discards messages.
- **Motion is additive.** Every animated component must render correctly with its motion wrapper removed; motion lives in wrappers and token files, never inside business logic.
