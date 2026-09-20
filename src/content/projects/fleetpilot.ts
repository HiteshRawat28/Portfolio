import type { Project } from "@/lib/types";
export const fleetpilot: Project = {
  slug: "fleetpilot",
  name: "FleetPilot",
  repoName: "TransitOps",
  shortDescription:
    "Fleet operations, dispatch decisions, and a role-aware AI Copilot in one business workflow.",
  fullSummary:
    "A multi-tenant fleet operations system bringing vehicles, drivers, trips, maintenance and financial context together. The interesting engineering work sits at the boundaries: who can see operational data, when a dispatch is eligible, and how an AI suggestion becomes an explicitly confirmed draft rather than an unchecked write.",
  role: "Full-stack developer · collaborative project",
  collaborationType: "Collaborative project",
  problem:
    "Fleet decisions span disconnected operational records. A dispatch needs available vehicles and drivers, trip costs and an auditable decision—not just a dashboard.",
  users: [
    "Owners and admins managing their organization",
    "Dispatchers planning trips",
    "Drivers accessing linked operational tasks",
  ],
  responsibilities: [
    "Developed the fleet application described in the résumé and maintained in my public repository.",
    "Integrated operational workflows across a React frontend, Express API and PostgreSQL data model.",
    "Explored a Copilot that reads organization-scoped context and requires confirmation for draft-trip actions.",
  ],
  constraints: [
    "Authorization must remain on the server, even when role-aware UI hides actions.",
    "External maps and toll data depend on configuration/provider availability.",
    "AI suggestions need bounded access and explicit approval.",
  ],
  technicalDecisions: [
    {
      title: "Stored-account session checks",
      detail:
        "Authenticate the token, then load the active account and compare session versions. This enables invalidation rather than treating every unexpired token as sufficient.",
    },
    {
      title: "Approval is a server boundary",
      detail:
        "Copilot draft actions use signed confirmation tokens bound to user, organization and role. Eligibility is rechecked inside the transaction; an idempotency record handles repeated confirmation.",
    },
    {
      title: "Business context before generation",
      detail:
        "Organization-scoped tool queries and role disclosure rules limit the data supplied to the provider. Text redaction is an additional layer, not a proof against prompt injection.",
    },
  ],
  technologies: [
    "React",
    "TypeScript",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Groq",
    "Flutter",
    "Docker",
  ],
  architecture: [
    {
      title: "Interfaces",
      detail: "React operations UI and Flutter driver client",
    },
    {
      title: "API boundary",
      detail: "Express · session checks · role permissions",
    },
    {
      title: "Business services",
      detail: "Dispatch eligibility · trips · analytics · matching",
    },
    {
      title: "Persistence",
      detail: "PostgreSQL / Prisma · organization-scoped records",
    },
    {
      title: "Copilot",
      detail: "Groq · scoped tools · signed confirmation → draft",
    },
  ],
  security: [
    "Backend authentication loads an active stored account and validates session version.",
    "API role checks and organization-scoped queries were located in source.",
    "Copilot disclosure rules redact role-restricted operational fields. This is not a penetration-test result.",
  ],
  dataFlow: [
    "Trip/vehicle/driver relationships support eligibility decisions.",
    "Confirmed Copilot drafts are created in a database transaction with a persisted idempotency key.",
    "FASTag matching code reconciles transactions; active issuer webhook enforcement was not verified.",
  ],
  integrations: [
    "Groq-backed Copilot with operational tools",
    "Configured mapping/routing providers and fallback paths",
    "FASTag matching/reconciliation logic—not a verified live issuer feed",
  ],
  testing: [
    "Source contains session, chat disclosure/action, dispatch eligibility, profitability, tracking and matching tests.",
    "Showcase tests were inspected, not executed during this portfolio build. No measured AI evaluation results are claimed.",
  ],
  deployment: [
    "A Vercel frontend demo was reachable during the audit.",
    "Repository includes backend and Docker configuration. Backend availability and production operations were not independently certified.",
  ],
  outcomes: [
    "An inspectable end-to-end fleet workflow with server-side session checks.",
    "A confirmed-draft Copilot path that makes approval, eligibility and repeated requests explicit.",
  ],
  limitations: [
    "No verified production adoption, latency or cost benchmark.",
    "No formal adversarial Copilot evaluation was located.",
    "Provider setup and active FASTag webhook enforcement require separate verification.",
  ],
  nextSteps: [
    "Add a reproducible AI evaluation set covering disclosure, tool errors and malicious instructions.",
    "Capture genuine dispatch and Copilot workflow screenshots.",
    "Reconcile legacy FleetPilot links with the current TransitOps repository name.",
  ],
  repositoryUrl: "https://github.com/HiteshRawat28/TransitOps",
  liveUrl: "https://fleet-pilot-khaki.vercel.app",
  media: [
    {
      src: "/media/generated/fleetpilot-ui-v2.webp",
      alt: "Editorial interface concept showing fleet availability, route planning, dispatch timing and an AI confirmation step",
      width: 1360,
      height: 1020,
      caption: "AI-generated concept visual — not a product screenshot.",
    },
  ],
  featured: true,
  categories: ["full-stack", "ai"],
  ai: {
    task: "Answer fleet questions and propose draft trips.",
    provider: "Groq",
    permissions:
      "Organization-scoped reads; role-aware disclosure; signed draft confirmation.",
    humanApproval:
      "Draft-trip creation requires explicit confirmation and server-side eligibility recheck.",
    guardrails: "Session, role, disclosure and action-token checks.",
    observability:
      "Source includes action and security tests; production trace coverage is not verified.",
    failureHandling:
      "Invalid/expired confirmation and ineligible assignments are rejected.",
    evaluation: "Test files present; no formal adversarial evaluation metrics.",
    limitations:
      "Provider output remains fallible; these controls do not establish prompt-injection immunity.",
  },
};
