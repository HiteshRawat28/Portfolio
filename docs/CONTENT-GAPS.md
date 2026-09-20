# Content gaps and intentional limitations

Updated 2026-09-16. See EVIDENCE.md for inspection details.

Current Crafted frontend: the owner requested generated imagery for every media slot except the professional portrait. Six project-specific and two supporting light editorial UI illustrations are installed and explicitly labelled AI-generated; none is presented as a product screenshot or implementation evidence. The homepage is organized as Hitesh Rawat's personal engineering portfolio, with verified role/ownership visible before project evidence. The portrait remains reserved for a real photo. Genuine workflow captures remain a future upgrade. Replacement instructions are in FRONTEND-REDESIGN.md.

- FleetPilot/TransitOps: current GitHub API resolves both names to TransitOps and identical commits. Scaffold's claim of two independent repositories is outdated. Display FleetPilot, link TransitOps; any repository rename is Hitesh's decision.
- AssetFlow domain currently serves FleetPilot. No live AssetFlow CTA until the owner fixes/verifies it.
- Genuine AssetFlow screenshots exist in its repository. Remaining projects need actual workflow captures; use clearly labelled architecture blocks in the meantime. SwiftBill/AI decorative hero assets are not product screenshots.
- Visual QA rejected the employee dashboard screenshot: browser chrome, missing-organization-scope error, empty metrics. It is genuine but unsuitable as a working-product demonstration. All current visuals are labelled architecture blocks until clean, verified workflow captures exist.
- Tests in showcased repositories were inspected, not executed. Do not equate test presence with a passing test run or security audit.
- No verified usage, uptime, latency, savings, revenue, or user-count measurements. Do not add metrics.
- No formal adversarial AI evaluation dataset or measured precision/recall found. Document failure paths and limitations instead.
- No active signed FASTag webhook enforcement located; describe matching/reconciliation only. Production provider access needs separate verification.
- DealOS feature-level personal ownership requires attributable commits or clarification. Keep team/hackathon framing.
- FleetPilot and AssetFlow have multiple repository contributors; collaborative labels supersede scaffold assumptions. Granular feature ownership requires attributable evidence, not merely repository ownership.
- SwiftBill GST logic is educational, not certified accounting/tax software; invoice concurrency needs separate verification.
- Personal Ops Agent uses transient in-memory sessions and local OAuth storage; no production multi-user boundary verified.
- Guardrails fixed-window rate limiting, rule ordering, hardcoded admin identity and development secret fallback need improvements in the source app, not changes made by this portfolio build.
- AssetFlow invitation email handling and automated tests need source-project follow-up.
- LeetCode's public profile was verified in the browser despite HTTP 403 restrictions. LinkedIn returned no usable profile body; manual verification remains, not a confirmed dead-link diagnosis.
- Résumé page 2 has a large blank area. Original document is not edited. Download preserves original private details; omit those from portfolio HTML. A redacted PDF requires Hitesh's explicit decision.
- Contact delivery needs RESEND_API_KEY and CONTACT_TO_EMAIL set to the Resend account's verified email (onboarding domain restriction). Default remains working email links, no unusable form.
- Custom domain, deployment and analytics/privacy decision are Hitesh-owned and deferred. No deployment, push or commit is authorized.
- QA boundaries: real Resend inbox delivery and browser success/error UI against the live provider require credentials and consent to send. Injected sender covers success/failure/timeout at the service boundary. In-app browser has no media-emulation capability; reduced-motion override is statically tested, with a manual emulated preference check still recommended.
- In-memory IP limits are process-local and reset on restart. Self-hosting must use a trusted proxy that replaces client-supplied forwarded headers; distributed abuse protection remains deployment-owned.
- Native 200% zoom/text-only resizing cannot be controlled in this in-app browser. Required viewport reflow was checked at all seven actual widths; native resize remains an explicit manual QA item. Automated scores are not a WCAG certification.
- Final-build mobile lab performance: home 89, FleetPilot 86, contact 93; other Lighthouse categories 100. Home/flagship fall short of the 90 target under this machine's slow-CPU warning. Repeat calibrated idle/deployed measurements and investigate hydration/main-thread work; see QA.md for retained lower runs and limits.
