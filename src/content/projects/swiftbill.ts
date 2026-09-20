import type { Project } from "@/lib/types";
export const swiftbill: Project = {
  slug: "swiftbill",
  name: "SwiftBill",
  repoName: "SwiftBill",
  shortDescription:
    "Billing, inventory, and GST calculations connected through transactional sales workflows.",
  fullSummary:
    "A small-business billing application that connects parties, line items, stock movements, invoice generation and GST arithmetic. Its strongest case-study theme is data consistency: a sale is more than an invoice number, because it also changes stock and balances.",
  role: "Full-stack developer · personal project",
  collaborationType: "Personal project",
  problem:
    "Disconnected invoice and stock records make a billing workflow easy to display but hard to keep consistent.",
  users: [
    "Business owners managing billing and inventory",
    "Authorized staff entering sales and party records",
  ],
  responsibilities: [
    "Built the billing project described in my résumé.",
    "Connected sales, stock and party balances in an Express/Prisma workflow.",
    "Implemented GST calculations and PDF invoice generation in the source project.",
  ],
  constraints: [
    "Line-item quantity and price require server validation.",
    "Sale, stock and balance changes should succeed together.",
    "Indian GST arithmetic in this educational project is not tax certification.",
  ],
  technicalDecisions: [
    {
      title: "One transaction for related writes",
      detail:
        "The sales handler uses Prisma's transaction API to create the sale and line items while updating stock and party balances. This narrows partial-write failure paths.",
    },
    {
      title: "Validate before accounting changes",
      detail:
        "Zod validates positive integer quantities and non-negative prices. Backend role middleware controls access; validation alone is not authorization.",
    },
    {
      title: "Make the tax boundary visible",
      detail:
        "Intra/inter-state GST calculations have a small assertion script. The site preserves the repository's educational disclaimer rather than implying accounting compliance.",
    },
  ],
  technologies: [
    "React",
    "JavaScript",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Zod",
    "PDFKit",
  ],
  architecture: [
    {
      title: "Billing interface",
      detail: "Parties · items · sales · invoices",
    },
    {
      title: "Express handlers",
      detail: "JWT/RBAC · validated line items",
    },
    {
      title: "Sale transaction",
      detail: "Sale + stock + party balance",
    },
    {
      title: "Outputs",
      detail: "PostgreSQL records · PDF invoice",
    },
  ],
  security: [
    "JWT authentication and backend role middleware were inspected.",
    "Sales inputs are validated server-side.",
    "Tenant-level guarantees were not established by this audit; no stronger isolation claim is made.",
  ],
  dataFlow: [
    "A sale connects party, line items, GST split and stock changes.",
    "Related writes use a database transaction.",
    "Invoice numbering is calculated before the transaction; concurrent numbering needs further verification.",
  ],
  integrations: ["PDFKit invoice output", "Prisma/PostgreSQL persistence"],
  testing: [
    "server/test-gst.js contains intra-state, inter-state and rounding assertions.",
    "The default server test script is a placeholder; no comprehensive regression suite is claimed.",
  ],
  deployment: [
    "Vercel frontend demo returned HTTP 200.",
    "Its page title is still generic; live backend behavior and accounting correctness are not certified.",
  ],
  outcomes: [
    "An implemented billing-to-stock workflow with inspectable transaction code.",
    "Concrete GST calculation assertions rather than unsupported accuracy metrics.",
  ],
  limitations: [
    "Educational tax logic—not certified accounting or tax software.",
    "Concurrency-safe invoice numbering is not verified.",
    "Limited automated test coverage; no production business metrics.",
  ],
  nextSteps: [
    "Add concurrency and rollback tests for sales/invoice numbering.",
    "Expand rounding, discounts and tax edge-case fixtures with expert review.",
    "Improve the source demo's metadata and capture real invoice/stock screens.",
  ],
  repositoryUrl: "https://github.com/HiteshRawat28/SwiftBill",
  liveUrl: "https://swift-bill-kappa.vercel.app",
  media: [
    {
      src: "/media/generated/swiftbill-ui-v2.webp",
      alt: "Editorial interface concept connecting inventory, invoice line items, tax separation, stock and party balances",
      width: 1360,
      height: 1020,
      caption: "AI-generated concept visual — not a product screenshot.",
    },
  ],
  featured: true,
  categories: ["full-stack"],
};
