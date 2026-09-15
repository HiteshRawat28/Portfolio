export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  shortDescription: string;
  summary: string;
  role: string;
  collaboration: string;
  categories: Array<"full-stack" | "ai">;
  technologies: string[];
  repositoryUrl: string;
  liveUrl?: string;
  image?: { src: string; alt: string; width: number; height: number };
  problem: string;
  users: string[];
  responsibilities: string[];
  constraints: string[];
  decisions: Array<{ title: string; body: string }>;
  security: string[];
  testing: string[];
  outcomes: string[];
  limitations: string[];
  nextSteps: string[];
};

export const projects: Project[] = [
  {
    slug: "fleetpilot",
    name: "FleetPilot",
    eyebrow: "FLAGSHIP · FLEET OPERATIONS",
    shortDescription:
      "A multi-tenant fleet operations platform spanning a web command center, Flutter mobile client, shared API, external transactions, and an organization-scoped AI copilot.",
    summary:
      "FleetPilot brings dispatch, driver and vehicle operations, trip planning, fuel and expense tracking, maintenance, and FASTag activity into one organization-scoped system.",
    role: "Full-stack engineer",
    collaboration: "End-to-end product implementation",
    categories: ["full-stack", "ai"],
    technologies: [
      "React",
      "TypeScript",
      "Flutter",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Google OAuth",
      "Docker",
      "Groq",
    ],
    repositoryUrl: "https://github.com/HiteshRawat28/TransitOps",
    liveUrl: "https://fleet-pilot-khaki.vercel.app",
    image: {
      src: "/projects/fleetpilot.png",
      alt: "FleetPilot project visual showing commercial vehicles on a highway",
      width: 1536,
      height: 1024,
    },
    problem:
      "Fleet operations are split across dispatch tools, vehicle records, driver communication, toll activity, fuel expenses, and maintenance logs. The project explores how those workflows can share one data model without losing organization and role boundaries.",
    users: ["Fleet administrators", "Dispatch operators", "Drivers", "Organization managers"],
    responsibilities: [
      "Designed an Express and TypeScript API used by both web and Flutter clients",
      "Modeled organization, driver, vehicle, trip, expense, maintenance, and transaction workflows",
      "Implemented authenticated, role-aware operations and organization scoping",
      "Integrated an AI copilot with backend-controlled credentials and allowlisted read tools",
      "Structured the stack for repeatable Docker Compose development",
    ],
    constraints: [
      "Two client experiences must share consistent domain behavior",
      "Tenant and role resolution must remain server-controlled",
      "External transaction delivery can be duplicated or arrive out of order",
      "AI access must not bypass application authorization",
    ],
    decisions: [
      {
        title: "One policy-aware API",
        body: "Web and mobile clients rely on the same backend rules so authorization and tenant filtering do not diverge across interfaces.",
      },
      {
        title: "Idempotent transaction ingestion",
        body: "FASTag callbacks use HMAC verification and idempotent matching so retries do not create duplicate financial activity.",
      },
      {
        title: "Constrained AI tools",
        body: "The copilot receives organization-scoped, role-allowlisted read tools instead of direct database or client-side credential access.",
      },
    ],
    security: [
      "JWT and Google OAuth authentication paths",
      "Server-side role resolution",
      "Organization-scoped queries",
      "Backend-only LLM credentials",
      "HMAC webhook verification",
    ],
    testing: [
      "Repository includes documented project scaffolding and containerized local setup",
      "Webhook behavior is designed around retry-safe transaction matching",
      "Public repository does not yet present a consolidated root-level test report",
    ],
    outcomes: [
      "One API surface supports web and Flutter clients",
      "Operational modules share organization and role context",
      "AI assistance is integrated into the product rather than exposed as an unrestricted chat wrapper",
    ],
    limitations: [
      "The public project name is still being normalized between FleetPilot and TransitOps",
      "Production-scale usage and performance claims have not been published",
    ],
    nextSteps: [
      "Publish a consolidated root README and test report",
      "Add explicit AI evaluation cases for authorization, tool selection, and unsupported requests",
      "Instrument API latency, webhook failures, and copilot tool traces",
    ],
  },
  {
    slug: "assetflow",
    name: "AssetFlow",
    eyebrow: "MULTI-TENANT · ASSET GOVERNANCE",
    shortDescription:
      "A role-aware platform for organization onboarding, asset allocation, transfers, resource booking, maintenance, notifications, and platform administration.",
    summary:
      "AssetFlow separates the public product site, tenant operations, and platform-owner controls while connecting the lifecycle of organizational assets and bookable resources.",
    role: "Full-stack engineer",
    collaboration: "Product and system implementation",
    categories: ["full-stack"],
    technologies: ["React", "Vite", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "Zustand"],
    repositoryUrl: "https://github.com/HiteshRawat28/AssetFlow",
    liveUrl: "https://asset-flow.ink",
    image: {
      src: "/projects/assetflow.png",
      alt: "AssetFlow employee dashboard with asset, booking, transfer, and maintenance overview",
      width: 1920,
      height: 1080,
    },
    problem:
      "Asset registers, room bookings, handovers, maintenance requests, and audit history often live in disconnected spreadsheets and informal messages. AssetFlow models those operations as one governed lifecycle.",
    users: ["Tenant administrators", "Asset managers", "Department heads", "Employees", "Platform owner"],
    responsibilities: [
      "Implemented organization onboarding and first-admin creation",
      "Created distinct tenant and Super Admin operating zones",
      "Built asset, allocation, transfer, booking, and maintenance workflows",
      "Applied role-aware routing and organization-scoped backend operations",
    ],
    constraints: [
      "Platform-owner access must remain separate from tenant administration",
      "Bookings require overlap detection",
      "Employee and administrator interfaces need different control surfaces",
    ],
    decisions: [
      {
        title: "Three explicit operating zones",
        body: "Public acquisition, tenant operations, and platform administration are separated instead of being mixed into one universal dashboard.",
      },
      {
        title: "Lifecycle-oriented modules",
        body: "Assets, transfers, bookings, maintenance, reporting, and notifications connect around real operational state changes.",
      },
    ],
    security: ["JWT authentication", "Role-aware authorization", "Organization-level data isolation", "Separate platform role"],
    testing: ["Live deployment is publicly accessible", "Repository includes a detailed product walkthrough and screenshot evidence"],
    outcomes: ["Covers onboarding through day-to-day asset operations", "Provides separate employee, administrator, and platform-owner experiences"],
    limitations: ["Invitation email delivery is identified as incomplete in the public documentation", "Published usage metrics are unavailable"],
    nextSteps: ["Replace temporary credential handling with invitation delivery", "Add automated authorization and cross-tenant isolation tests"],
  },
  {
    slug: "swiftbill",
    name: "SwiftBill",
    eyebrow: "ERP · BILLING & INVENTORY",
    shortDescription:
      "An educational GST-oriented billing and inventory system with atomic stock and ledger updates, role-based access, invoice PDFs, and business reporting.",
    summary:
      "SwiftBill explores correctness-heavy business workflows where invoices, inventory, and party balances must change together.",
    role: "Full-stack engineer",
    collaboration: "Independent project",
    categories: ["full-stack"],
    technologies: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "Zustand", "Recharts", "PDFKit"],
    repositoryUrl: "https://github.com/HiteshRawat28/SwiftBill",
    liveUrl: "https://swift-bill-kappa.vercel.app",
    problem:
      "Small-business billing connects tax calculation, invoice generation, stock movement, and customer or supplier balances. Updating those records independently can leave the system inconsistent.",
    users: ["Small-business administrators", "Accountants", "Read-only viewers"],
    responsibilities: [
      "Designed the PostgreSQL relational schema",
      "Implemented sales and purchase transactions through Prisma",
      "Built GST calculation, party ledger, inventory, PDF, and reporting workflows",
      "Added role-based authentication and protected operations",
    ],
    constraints: ["Inventory and ledger balances must remain consistent", "Tax treatment changes with party location", "The project is educational rather than certified tax software"],
    decisions: [
      {
        title: "Atomic sales and purchases",
        body: "Stock and party balances are updated inside the same database transaction as the business document, preventing partial writes.",
      },
      {
        title: "Explicit tax-domain boundary",
        body: "CGST/SGST versus IGST behavior is modeled for learning while the documentation clearly avoids certification claims.",
      },
    ],
    security: ["JWT authentication", "Admin, accountant, and viewer roles", "Server-side validation of protected operations"],
    testing: ["Seeded local setup and deployment instructions are documented", "Formal public test coverage is not currently reported"],
    outcomes: ["Sales and purchases coordinate inventory and ledgers", "Invoices can be exported as PDFs", "Threshold warnings surface e-way bill considerations"],
    limitations: ["Tax logic is educational and must not be used as certified compliance software", "No verified production-user metrics are available"],
    nextSteps: ["Add a domain-focused transaction test suite", "Version tax rules and add audit-friendly calculation traces"],
  },
  {
    slug: "dealos",
    name: "DealOS",
    eyebrow: "COLLABORATION · QUOTATION TO CASH",
    shortDescription:
      "A team-built B2B revenue workspace covering customers, quotations, approvals, orders, fulfillment, invoicing, subscriptions, payments, and deal health.",
    summary:
      "DealOS was developed as a hackathon team project and demonstrates contribution inside a broader product with multi-tenant authorization and payment workflows.",
    role: "Full-stack contributor",
    collaboration: "Team project · Odoo Hackathon 2026",
    categories: ["full-stack"],
    technologies: ["React 19", "TypeScript", "Node.js", "Express 5", "Prisma", "PostgreSQL", "Zod", "Razorpay", "Vitest"],
    repositoryUrl: "https://github.com/amartya1523/DealOS",
    problem:
      "B2B revenue work often crosses separate quotation, approval, order, warehouse, invoicing, subscription, and payment tools. DealOS brings the workflow into one organization-scoped application.",
    users: ["Revenue teams", "Approvers", "Warehouse operators", "Organization administrators", "Platform owner"],
    responsibilities: [
      "Contributed to a browser-based quotation-to-cash workspace",
      "Worked across authenticated workflows, validated APIs, and end-to-end product behavior",
      "Supported payment, reconciliation, and workflow verification",
    ],
    constraints: ["Team ownership must remain explicit", "Financial actions require retry-safe behavior", "Customer-facing quotation views must not expose internal controls"],
    decisions: [
      {
        title: "Immutable quotation history",
        body: "Revisions are preserved to make approval and commercial changes traceable rather than silently replacing past state.",
      },
      {
        title: "Retry-safe workflow actions",
        body: "Idempotent backend actions and signed payment webhooks protect order and reconciliation flows from duplicate delivery.",
      },
    ],
    security: ["HTTP-only session authentication", "CSRF protection", "Module-level authorization", "Organization data isolation", "Signed webhook validation"],
    testing: ["Backend unit and integration tests", "Frontend tests", "API workflow audits"],
    outcomes: ["Connected quotation, approval, order, warehouse, invoice, subscription, and payment stages", "Delivered during a 24-hour team hackathon"],
    limitations: ["Contribution was collaborative and should not be interpreted as sole authorship", "Payment integration uses test mode"],
    nextSteps: ["Document individual ownership through linked pull requests", "Add deployment and operational monitoring evidence"],
  },
  {
    slug: "personal-ops-agent",
    name: "Personal Ops Agent",
    eyebrow: "AI LAB · TOOL-USING AGENT",
    shortDescription:
      "A custom AI agent for Google Calendar and personal notes with confirmation-gated mutations, live traces, and explicit clarification behavior.",
    summary:
      "The project explores agent control flow without a heavyweight orchestration framework, keeping tool execution visible and state-changing actions behind human approval.",
    role: "AI application engineer",
    collaboration: "Independent experiment",
    categories: ["ai"],
    technologies: ["Python", "FastAPI", "React", "Google Calendar API", "Gemini", "SQLite", "SSE"],
    repositoryUrl: "https://github.com/HiteshRawat28/Personal-ops-agent",
    problem:
      "Calendar assistants can create real consequences when they guess missing details or execute mutations prematurely. The experiment focuses on explicit control over planning, tools, and confirmation.",
    users: ["Individual calendar and notes users"],
    responsibilities: ["Built a custom ReAct-style loop", "Integrated Google OAuth and Calendar tools", "Streamed tool traces with server-sent events", "Created confirmation cards for mutations"],
    constraints: ["State-changing tools require explicit approval", "Missing scheduling details must trigger clarification", "OAuth credentials and tokens must remain server-side"],
    decisions: [
      { title: "Human-gated mutations", body: "Create, update, and delete operations pause before execution and require an explicit user confirmation." },
      { title: "Visible tool traces", body: "SSE events expose tool selection and execution state without relying on an opaque framework runtime." },
    ],
    security: ["Google OAuth", "Server-side tool execution", "Explicit mutation confirmation"],
    testing: ["Public repository describes safety behavior", "A published evaluation suite is not yet available"],
    outcomes: ["Supports multi-step calendar and notes workflows", "Asks for clarification rather than inventing missing scheduling details"],
    limitations: ["The repository is an early experiment", "Quality, latency, and tool-selection metrics are not yet published"],
    nextSteps: ["Add scenario-based agent evaluations", "Measure tool accuracy, recovery behavior, latency, and cost"],
  },
  {
    slug: "ai-guardrails",
    name: "AI Chat with Guardrails",
    eyebrow: "AI LAB · SAFETY & OBSERVABILITY",
    shortDescription:
      "A full-stack chat application exploring input and output guardrails, database-backed rate limiting, admin observability, and graceful provider failures.",
    summary:
      "The project treats safety controls and operational visibility as application features around the model call.",
    role: "Full-stack AI application engineer",
    collaboration: "Independent experiment",
    categories: ["ai"],
    technologies: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "Gemini"],
    repositoryUrl: "https://github.com/HiteshRawat28/AI-chat-App-with-Gaurdrails",
    problem:
      "An AI interface needs controls for restricted requests, unsafe outputs, provider quotas, and abuse—not only a chat screen.",
    users: ["Authenticated chat users", "Application administrator"],
    responsibilities: ["Implemented the chat flow", "Added input and output checks", "Built Prisma-backed leaky-bucket rate limiting", "Created an admin event dashboard"],
    constraints: ["Provider quotas can fail", "Guardrails can create false positives and negatives", "Administrative events must be separated from normal user access"],
    decisions: [
      { title: "Guardrails on both sides", body: "Requests are checked before generation and responses are checked before they reach the user." },
      { title: "Observable controls", body: "Blocked requests and triggered guardrails are persisted for administrative review instead of failing silently." },
    ],
    security: ["JWT authentication", "Database-backed rate limiting", "Input and output checks", "Administrative observability"],
    testing: ["Failure paths for quota exhaustion and backend errors are documented", "Guardrail precision and recall have not been published"],
    outcomes: ["Demonstrates layered controls around an LLM API", "Provides operational visibility into blocked interactions"],
    limitations: ["Keyword or policy checks cannot guarantee safe model behavior", "Formal adversarial evaluation is still needed"],
    nextSteps: ["Publish an adversarial test set", "Measure false-positive and false-negative behavior", "Add policy versioning and trace correlation"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const fullStackProjects = projects.filter((project) => project.categories.includes("full-stack"));
export const aiProjects = projects.filter((project) => project.categories.includes("ai"));
