import type { Project } from "@/lib/types";
export const dealos: Project = {
  slug: "dealos",
  name: "DealOS",
  repoName: "amartya1523/DealOS",
  shortDescription:
    "Collaborative sales operations platform built in an Odoo Hackathon team.",
  fullSummary:
    "A team-built sales operations platform connecting quotations, policy, orders, payments and shipment workflows. This case study describes the shared system and the engineering decisions visible in its repository, without attributing every subsystem to me.",
  role: "Full-stack contributor · team / hackathon",
  collaborationType: "Collaborative · Odoo Hackathon 2026",
  problem:
    "Sales operations span approvals and hand-offs. Quotation, order and payment state need explicit policy and organization-aware access, not isolated CRUD pages.",
  users: [
    "Organization sales teams and managers",
    "Customers using portal workflows",
    "Platform administrators",
  ],
  responsibilities: [
    "Contributed to DealOS in a 24-hour Odoo Hackathon team, supported by the résumé.",
    "Worked collaboratively on the full-stack platform.",
    "Feature-level personal ownership is not independently attributed; technical sections describe the team's repository.",
  ],
  constraints: [
    "Organization membership and platform privileges must not be interchangeable.",
    "Approval policies and payment state transitions need validation.",
    "The inspected Razorpay integration is deliberately restricted to test keys.",
  ],
  technicalDecisions: [
    {
      title: "Separate organization and platform contexts",
      detail:
        "Backend authorization models stored membership, an effective user context and read-only platform views. This makes privileged access a distinct path rather than a client-side role flag.",
    },
    {
      title: "Treat payment callbacks as untrusted",
      detail:
        "Payment utilities validate checkout/webhook HMAC signatures with timing-safe comparison and derive event/body keys for repeated notifications. Live payment readiness is not implied.",
    },
    {
      title: "Policy as structured input",
      detail:
        "Policy schemas validate discount and approval configuration. Explicit structure is easier to test than loosely coupled UI conditions.",
    },
  ],
  technologies: [
    "React",
    "TypeScript",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Zod",
    "Razorpay",
  ],
  architecture: [
    {
      title: "Team-built interfaces",
      detail: "Sales operations · customer portal · platform admin",
    },
    {
      title: "Authorization",
      detail: "Stored membership · scoped context · CSRF",
    },
    {
      title: "Sales workflows",
      detail: "Quotation → policy → order → shipment",
    },
    {
      title: "Payments / persistence",
      detail: "Test-mode Razorpay · PostgreSQL",
    },
  ],
  security: [
    "Stored membership and organization-scoped customer queries were inspected.",
    "CSRF/origin checks and separate platform session context are present.",
    "Test-mode payment signature utilities are present; this is source evidence, not an independent security certification.",
  ],
  dataFlow: [
    "Quotation/order/payment/shipment state is organized into explicit modules.",
    "Payment utilities convert validated decimal money to integer paise and derive webhook event keys.",
    "Personal authorship and end-to-end production behavior are not inferred from subsystem presence.",
  ],
  integrations: [
    "Razorpay configured for test mode only",
    "PDF and customer portal modules present in the shared repository",
  ],
  testing: [
    "Repository contains payment, platform security, order, quotation, shipment and policy tests.",
    "Tests were inspected, not executed as part of portfolio verification.",
  ],
  deployment: [
    "No independently verified public live demo was found.",
    "The shared repository is hosted under amartya1523, not presented as my sole-owned work.",
  ],
  outcomes: [
    "A collaborative, inspectable sales operations application.",
    "Odoo Hackathon team participation supported by the résumé.",
  ],
  limitations: [
    "Feature-level individual contribution remains unverified.",
    "Payment code inspected is test-mode only.",
    "No verified production adoption or live-demo guarantee.",
  ],
  nextSteps: [
    "Add attributable contribution notes supported by commit history.",
    "Publish a reproducible team demo and workflow captures.",
    "Document approval/payment state-transition test execution.",
  ],
  repositoryUrl: "https://github.com/amartya1523/DealOS",
  liveUrl: null,
  media: [
    {
      src: "/media/generated/dealos-ui-v2.webp",
      alt: "Editorial interface concept showing a collaborative quotation, approval, order, payment and shipment workflow",
      width: 1360,
      height: 1020,
      caption: "AI-generated concept visual — not a product screenshot.",
    },
  ],
  featured: false,
  categories: ["full-stack"],
};
