# Design — Hitesh Rawat Portfolio

> Superseded visual specification: current Portfolite tokens, typography, composition, approved placeholders and intentional differences are documented in docs/FRONTEND-REDESIGN.md. The earlier light/Swiss-grid specification below is historical, not the current visual source of truth.

## Visual Tone

Editorial SaaS case-study site with Swiss-grid influence. Light-first, warm-neutral, typographically led. It should read as restrained, technical, and deliberately composed — closer to a well-made product documentation site or an engineering magazine than to a developer template.

Reference feeling: Stripe's writing discipline, Linear's restraint, a print annual report's grid. Not a landing page, not a component showcase, not a terminal.

**Rejected outright:** anime/manga, gaming, cyberpunk, neon, purple-black "AI" gradients, glow orbs, dot grids, glassmorphism, rainbow gradients, sparkles, fake terminals, bento grids, oversized rounded cards.

## Color Palette

Light theme only in v1. All values are semantic tokens in `src/styles/tokens.css`; components never use raw hex.

| Token                      | Role                                | Hex       |
| -------------------------- | ----------------------------------- | --------- |
| `--color-background`       | Page base (warm off-white)          | `#F7F5F1` |
| `--color-surface`          | Cards, panels                       | `#FCFBF9` |
| `--color-surface-elevated` | Flagship/feature blocks             | `#FFFFFF` |
| `--color-text-primary`     | Headings, body (graphite ink)       | `#16191D` |
| `--color-text-secondary`   | Supporting copy, meta (muted slate) | `#5A6472` |
| `--color-text-inverse`     | Text on accent fills                | `#FFFFFF` |
| `--color-border`           | Hairlines, dividers                 | `#E3DFD8` |
| `--color-border-strong`    | Emphasised edges, inputs            | `#CBC5BA` |
| `--color-accent`           | Links, primary action (cobalt)      | `#1D4ED8` |
| `--color-accent-hover`     | Hover/active                        | `#1739A8` |
| `--color-accent-subtle`    | Accent tint background              | `#E8EEFB` |
| `--color-focus`            | Focus ring                          | `#1D4ED8` |
| `--color-ai-accent`        | AI Lab only (deep teal)             | `#0F6E68` |
| `--color-ai-subtle`        | AI Lab tint                         | `#E6F1F0` |
| `--color-success`          | Form success                        | `#1B6B45` |
| `--color-error`            | Form error                          | `#B3261E` |

**Contrast, measured against `#F7F5F1`:** primary text 15.9:1 · secondary text 5.5:1 · accent 6.1:1 · AI accent 5.6:1 · error 6.0:1 · success 5.3:1. All pass AA for body text. Re-verify any value that changes.

Rules: one accent, used sparingly — links, the single primary CTA, and thin section markers. Deep teal appears _only_ in the AI Engineering Lab and on `/focus/ai-applications`. No gradients beyond an optional hairline rule. Never communicate state with colour alone.

## Typography

- **Interface & body:** IBM Plex Sans — weights 400, 500, 600 only.
- **Technical labels:** IBM Plex Mono — weights 400, 500. Used for eyebrows, tags, project metadata, stack lists, and diagram labels. Uppercase with `0.08em` tracking at small sizes.
- **No third family.** No Inter, Geist, or Space Grotesk.
- Loaded via `next/font/google`, `latin` subset, `display: swap`, self-hosted by Next — no render-blocking external CSS.

**Scale** (base 16px / 1rem):

| Step   | Size                          | Line height | Use                           |
| ------ | ----------------------------- | ----------- | ----------------------------- |
| `xs`   | 12px                          | 1.4         | Mono labels, captions         |
| `sm`   | 14px                          | 1.5         | Meta, tags, footer            |
| `base` | 16px                          | 1.65        | Body                          |
| `lg`   | 18px                          | 1.6         | Lead paragraphs, hero support |
| `xl`   | 20px                          | 1.45        | h4                            |
| `2xl`  | 24px                          | 1.35        | h3                            |
| `3xl`  | 30px                          | 1.25        | h2                            |
| `4xl`  | 36px                          | 1.2         | Case-study h1                 |
| `hero` | `clamp(2.25rem, 5vw, 3.5rem)` | 1.1         | Homepage h1 only              |

**Measure:** body ≤ 68ch, lead ≤ 60ch, headings ≤ 22ch. Headings use weight 600 and `-0.015em` tracking; body stays at 400. The hero never grows so large that Selected Work is pushed fully off the first screen.

## Spacing & Theme Conventions

- **Base unit 4px.** Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Grid:** 12 columns, max content width 1200px, gutters 24px desktop / 16px mobile. Collapse: 12 → 8 (tablet) → 4 (mobile), with deliberate reflow rather than shrinking.
- **Section rhythm:** `clamp(64px, 9vw, 128px)` vertical padding; sections separated by a 1px `--color-border` rule, not by shadow.
- **Radius:** 2px (tags, inputs), 4px (buttons), 8px (media frames). Nothing larger. No pill buttons.
- **Shadows:** one token only — `0 1px 2px rgb(22 25 29 / 0.05)` — reserved for the flagship media frame and the open mobile menu. Everything else uses borders. No backdrop filters.
- **Borders:** 1px hairlines are the primary separation device. `--color-border-strong` for inputs and emphasised edges.
- **Focus:** `outline: 2px solid var(--color-focus); outline-offset: 2px` — always visible, never removed.
- **Targets:** interactive elements ≥ 44×44px on touch.
- **Media frames:** 16:10 or 16:9, 1px border, 8px radius, explicit `width`/`height`. A project with no real screenshot gets a bordered architecture/summary block that visibly is not a screenshot.

## Motion Conventions

Tokens in `src/lib/motion.ts`: durations 150ms (feedback), 250ms (reveal), 350ms (menu); easing `cubic-bezier(0.22, 1, 0.36, 1)`.

**Allowed:** one-time hero reveal (opacity + ≤8px translate), small stagger (≤60ms) across closely related items, one-time section reveal, menu open/close, gentle media hover (≤1.02 scale or a border shift), button/link colour and underline feedback.

**Forbidden:** continuous ambient motion, parallax, scroll hijacking, animated arrows, bounce/spring easing, large hover displacement, page-transition theatrics, anything animating layout properties, and any delay that makes content wait to be readable.

Under `prefers-reduced-motion: reduce`, all of the above collapse to instant state changes. Every animated component must render correctly with its motion wrapper deleted.
