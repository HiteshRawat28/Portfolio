import type { Project } from "@/lib/types";
export const assetflow: Project = {
  slug: "assetflow",
  name: "AssetFlow",
  repoName: "AssetFlow",
  shortDescription:
    "Organization-scoped asset management with role-based administration and booking conflict checks.",
  fullSummary:
    "An asset management application for organizations that need to track equipment, ownership and reservations. It separates employee, administrative and platform workflows, with tenant context enforced in backend middleware and asset/booking services.",
  role: "Full-stack contributor · hackathon project",
  collaborationType: "Collaborative · Odoo Hackathon 2026",
  problem:
    "Equipment records and reservations become unreliable when access, ownership and availability are managed in separate spreadsheets.",
  users: [
    "Employees finding and booking equipment",
    "Organization admins managing assets, users and departments",
    "Platform superadmins with a distinct administration scope",
  ],
  responsibilities: [
    "Contributed to the asset management project listed in my résumé; the repository contains other contributors' work.",
    "Implemented organization-aware asset and booking workflows in the public application.",
    "Designed role-specific interfaces for employee and administrative tasks.",
  ],
  constraints: [
    "Cross-organization IDs must be checked against tenant context.",
    "Bookings must detect overlapping time windows.",
    "Platform administration needs a consciously different access scope.",
  ],
  technicalDecisions: [
    {
      title: "Tenant scope from authenticated context",
      detail:
        "Middleware derives organization context from verified authentication. Services verify related category, department and asset IDs within that organization rather than accepting client ownership.",
    },
    {
      title: "Availability is a workflow invariant",
      detail:
        "Booking services reject conflicts with existing non-cancelled reservations. Application checks are visible; concurrency under simultaneous requests remains a follow-up.",
    },
    {
      title: "Separate platform scope",
      detail:
        "Superadmin access is explicit in authorization and tenant middleware. That privilege increases audit requirements rather than demonstrating universal isolation.",
    },
  ],
  technologies: [
    "React",
    "JavaScript",
    "Express",
    "PostgreSQL",
    "Prisma",
    "JWT",
    "Zod",
  ],
  architecture: [
    {
      title: "Role-specific UI",
      detail: "Employee · admin · platform workflows",
    },
    {
      title: "Authenticated scope",
      detail: "JWT verification → organization context",
    },
    {
      title: "Asset / booking services",
      detail: "Related-record checks · overlap rejection",
    },
    {
      title: "Persistence",
      detail: "PostgreSQL / Prisma · organization relations",
    },
  ],
  security: [
    "JWT verification and backend role authorization were inspected.",
    "Tenant middleware requires organization context for ordinary users.",
    "Asset and booking services scope related records; superadmin deliberately has broader access.",
  ],
  dataFlow: [
    "Assets belong to organizations and reference scoped departments/categories.",
    "Booking conflict checks run against organization-scoped, non-cancelled reservations.",
    "Concurrent booking guarantees need load/concurrency tests before stronger claims.",
  ],
  integrations: [
    "PostgreSQL through Prisma",
    "Invitation workflow exists; README reports incomplete email handling",
  ],
  testing: [
    "No active automated test suite was observed in the inspected package manifest and source.",
    "Manual workflows and screenshots are evidence of UI implementation, not test coverage.",
  ],
  deployment: [
    "The advertised AssetFlow domain currently serves FleetPilot. No AssetFlow live-demo link is shown.",
    "Repository remains available for inspection.",
  ],
  outcomes: [
    "An implemented asset and booking workflow with explicit backend tenant context.",
    "Genuine employee-dashboard screenshots available in the repository.",
  ],
  limitations: [
    "Missing automated regression evidence.",
    "Invitation email handling is incomplete in repository documentation.",
    "Current advertised demo does not display this product.",
  ],
  nextSteps: [
    "Repair and verify the AssetFlow deployment.",
    "Add cross-tenant and concurrent-booking regression tests.",
    "Complete invitation delivery and remove demo-only setup assumptions.",
  ],
  repositoryUrl: "https://github.com/HiteshRawat28/AssetFlow",
  liveUrl: null,
  media: [
    {
      src: "/media/generated/assetflow-concept.webp",
      alt: "Monochrome concept illustration of organization-scoped equipment, booking slots and access boundaries",
      width: 1402,
      height: 1122,
      caption: "AI-generated concept visual — not a product screenshot.",
    },
  ],
  featured: true,
  categories: ["full-stack"],
};
