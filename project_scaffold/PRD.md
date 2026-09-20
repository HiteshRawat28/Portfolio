# Project Requirements Document — Hitesh Rawat Portfolio

## Overview

A production-ready personal portfolio website for Hitesh Rawat, presented as an editorial SaaS case-study site rather than a developer-template landing page. Its job is to convince recruiters and engineering hiring managers, within roughly 60 seconds of scanning, that Hitesh can design, build, secure, and finish real multi-tenant business software and practical AI applications.

Central positioning (used verbatim as the site's spine):

> Full-stack software engineer building secure, multi-tenant business systems and practical AI applications.

## Target Users

| Audience                          | What they need in <60s                                       | What they need on a deeper read                                   |
| --------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------- |
| Technical recruiters / HR screens | Name, role fit, stack, location, résumé, contact             | Confirmation the projects are real and live                       |
| Engineering hiring managers       | Evidence of system design, authz, transactions, integrations | Trade-offs, constraints, limitations, what he'd do next           |
| Interviewers (pre-call prep)      | One flagship project to anchor questions on                  | Architecture, data model, security enforcement, testing           |
| AI-team leads                     | Real AI inside a product workflow, not demos                 | Tool permissions, HITL confirmation, guardrails, failure handling |

Roles targeted: SDE, full-stack, backend-leaning full-stack, AI application engineering, AI integration / agentic applications.

## Core Features (v1 / MVP)

- **Homepage**: navigation, hero, Selected Work (weighted by project importance), AI Engineering Lab, Capabilities, About, Contact CTA, footer.
- **Structured project data layer**: every project lives in one typed data source consumed by the homepage, project index, case studies, and focus pages. No content duplication.
- **Case-study pages** (`/projects/[slug]`) for FleetPilot, AssetFlow, SwiftBill, DealOS, Personal Ops Agent, AI Chat with Guardrails — problem, users/roles, contribution, constraints, architecture, technical decisions, authn/authz, data & transactions, integrations, testing, deployment, verifiable outcomes, limitations, next steps, real links.
- **Role-specific focus pages**: `/focus/full-stack` and `/focus/ai-applications` — same project data, role-specific intro and ordering only.
- **Résumé route + download**: `/resume` with a stable, professionally named PDF (`Hitesh-Rawat-Resume.pdf`).
- **Contact**: real email, LinkedIn, GitHub, plus a working validated contact form (see Architecture for the free-tier service choice).
- **Semantic design token system**: light-first editorial palette, IBM Plex type pairing, 12-column grid, all components consuming tokens.
- **Accessibility baseline**: WCAG 2.1 AA — semantic landmarks, skip link, visible focus, keyboard-operable mobile menu, reduced-motion support, AA contrast.
- **SEO & metadata**: per-page titles/descriptions, canonicals, Open Graph + social image, favicon, theme color, sitemap, robots.txt.
- **About section**: LNMIIT CS undergraduate, Jaipur, Vivacity leadership, Odoo Hackathon, 300+ LeetCode as a supporting detail.

## Future Scope (not in v1)

- Dark theme (tokens are structured to allow it; ship light-only first).
- Writing / notes section or engineering blog.
- MDX-authored case studies (v1 uses typed TS data objects).
- Privacy-conscious analytics (Vercel Analytics or Plausible) + accompanying privacy notice.
- Interactive architecture diagrams; v1 uses static, labelled, responsive SVG only where it aids comprehension.
- Per-project screenshot galleries / lightbox.
- Custom domain + verified sending domain for the contact form.

## Success Criteria

v1 is done when all of the following are true and have been checked, not assumed:

1. `npm run build` succeeds with zero type errors and zero lint errors.
2. Every route in the IA renders: `/`, `/projects`, six case studies, two focus pages, `/about`, `/resume`, `/contact`.
3. Every external link (GitHub, live demos, LinkedIn, LeetCode) resolves — verified by opening them, with `rel="noopener noreferrer"` on new-tab links.
4. Zero fabricated content: no invented metrics, testimonials, clients, logos, screenshots, employment, or links.
5. Keyboard-only traversal of the homepage and mobile menu works, with visible focus throughout and no traps.
6. No horizontal overflow at 320, 375, 430, 768, 1024, 1280, and 1440px.
7. `prefers-reduced-motion: reduce` removes all non-essential motion; the site is fully usable with JS animation disabled.
8. Lighthouse ≥ 90 on Performance, Accessibility, Best Practices, SEO (mobile), without gaming the audit.
9. Résumé downloads with the correct filename; phone number and CGPA appear nowhere on the site.
10. Contact form (or email fallback) exercises real loading, success, and error states.
11. `Memory.md` records completed phases and any missing content.

## Out of Scope

- Any CMS, database, or auth on the portfolio itself.
- A chatbot on the portfolio "to demonstrate AI."
- Pricing, newsletter, testimonials, client logos, generic FAQ, Terms of Service.
- Framework migration experiments, component-library showcases, multiple motion libraries.
- Editing the source résumé PDF, or renaming/restructuring any of Hitesh's project repositories as part of this work.
