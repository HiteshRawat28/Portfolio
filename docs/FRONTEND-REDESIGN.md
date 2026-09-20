# Portfolite frontend redesign

## Current authority and owner answers

The attached 2026-09-16 change prompt supersedes the previous light/Swiss-grid palette, IBM-only typography and corner restrictions. Reference: [public Portfolite](https://portfolite.framer.website/). The private Framer project redirects to login and was not inspected; the owner confirmed there are no private-copy modifications.

The owner initially approved blank labelled placeholders, then on 2026-09-20 requested generated imagery for every slot except the professional portrait. The installed project/process/capabilities assets are visibly labelled AI-generated concept visuals and are not represented as product screenshots or implementation evidence. The portrait remains a genuine-only placeholder. No stock portrait, fictional screenshot, client logo, testimonial, unsupported metric or sample booking link was added.

## Reference audit and adaptation

Observed desktop h1/h2 Satoshi 400: 92px / 92px. Narrow mobile hero: 44px / 44px. Native hero retains centered badge/copy/paired outlined actions, black background and desktop-only grayscale flowing decoration. Persistent compact navigation uses the actual identity and existing routes, with a résumé action.

The leading gallery uses three staggered columns, a wider center column, near-square 16:15 image frames and narrow gutters. A direct, row-major project grid keeps DOM and visual reading order aligned on mobile; static desktop offsets reproduce the reference composition without changing semantic order. One gallery contains six actual projects, rather than duplicating galleries to fill the reference. Mobile keeps every project available. Titles, collaboration labels and concise technical context stay visible for recruiters; this is an intentional addition to the reference's hover-led case-study pill.

About retains its split text/portrait composition with actual education/team experience. Process uses three owner-approved engineering steps, without unsupported client/deadline promises. Capabilities adapt the services split and supporting text grid. Detailed existing AI controls remain a native disclosure within capabilities and in the unchanged focus/case-study routes. Contact is a centered large closing section with actual email/social profiles.

Omitted: fictional clients/logo strip, duplicate recent-work carousel, testimonials, years/project/satisfaction statistics, sample pricing/FAQ/booking destinations and Framer marketplace credits. Existing case studies/other routes inherit Satoshi and dark tokens while keeping readable information hierarchy; the 92px homepage display scale is not applied indiscriminately to technical prose.

## Files and tokens

- src/styles/tokens.css: monochrome surfaces/text/borders, status/focus colors, display scale, spacing, navigation/gallery sizes, aspect ratios, radii and shadows.
- src/app/globals.css: semantic Tailwind mappings, responsive layout utilities and reduced-motion reset.
- src/app/layout.tsx: locally self-hosted Satoshi 400/500, dark metadata theme.
- src/components/primitives/PortfolioImage.tsx: reserved-ratio media, accessible labelled placeholders and visible media captions. Project illustrations use contain to avoid hiding their composition.
- src/components/sections/: Hero/decoration, staggered SelectedWork/ProjectPreview, About, Process, Capabilities/AI disclosure, ContactCTA.
- src/components/layout/: compact persistent header and existing accessible menu. Original footer destinations remain.
- src/content/: existing project/profile data plus design-media slots, experience and process steps. Retired unused ProjectFeature from the previous weighted-row presentation.

No backend contract, validation/submission logic, provider integration or source project changed. No new runtime/UI/motion dependency.

## Media provenance and replacement

Eight original monochrome concept illustrations were generated with the built-in image-generation tool, visually reviewed, converted to quality-88 WebP and stored in `public/media/generated`. Each project record and the process/capabilities slots include a descriptive alt, intrinsic dimensions and a visible AI-generated caption. Combined optimized asset size is under 750KB. They contain no project logos, metrics or readable interface copy and are not screenshots.

When genuine workflow screenshots become available, place them in `public`, then replace the corresponding `src`, `alt`, `width`, `height` and `caption` in `src/content/projects`. Set the portrait in `src/content/design-media.ts` only to a real approved photo. The process/capabilities illustrations may remain or be replaced with genuine diagrams. Never silently relabel a concept illustration as a screenshot.

Portrait frame 4:5; process 4:5; capabilities 4:3; gallery 16:15. Below-fold images use next/image default lazy loading and responsive sizes with reserved dimensions. No essential hero image or LCP bitmap.

## Fonts and licensing

Satoshi is obtained unmodified from official Fontshare API/CDN and self-hosted through next/font/local, not embedded from Framer. [ITF FFL v2](https://www.fontshare.com/licenses/itf-ffl) allows self-hosting for one's own website but restricts redistribution and font modification. Proprietary binaries are Git-ignored. scripts/setup-fonts.mjs independently downloads official WOFF2 400/500 for each installation; npm run dev/build run the cached setup automatically. No subsetting/conversion is performed. First setup needs network access; errors are explicit rather than silent fallback. Each person reusing the repository must obtain their own licensed copy. The existing IBM Plex licensed TTF remains only in the social-image renderer.

The grayscale hero is an original static SVG approximation, not a copied stock/template bitmap. Its bounded soft filter is desktop-only; no continuous motion, WebGL or scroll hijacking. Content is visible before JavaScript.

## Verification status

Final production verification completed on 2026-09-19. Prettier, ESLint, strict TypeScript, all 13 Node tests and the optimized Next build pass. The build produced 20/20 static pages and all six case-study paths. The detailed command output is recorded in `project_scaffold/Memory.md`.

The production browser matrix covers all 13 page routes at 320, 768, 1024 and 1440 pixels: 52/52 combinations have a black theme, one h1, a main landmark, no broken images and no horizontal overflow. The homepage resolves to 44px display type at mobile and 92px at desktop; the desktop gallery computes as three weighted columns, while mobile renders all six projects in the registry's recruiter-priority order. Browser checks also cover the mobile focus trap/Escape restoration, skip link, configured validation-only contact state, unconfigured mail fallback and branded unknown-project route. No real contact message was sent.

Production output now uses `.next-production`; development uses `.next-dev`. This isolates the verified bundle from an obsolete `.next` cache that retained the previous light token file. The final CSS bundle contains `--color-background:#000`, contains the local-font mapping and does not contain the retired `#f7f5f1` background token.

Previous Lighthouse scores in QA.md describe the earlier light build, not this redesign. Native zoom/text-only resize and browser media-preference emulation remain manual because the in-app browser does not provide those controls. Reduced-motion reset is statically tested; do not claim a simulated browser pass or visual pixel identity. The portrait slot intentionally remains empty.
