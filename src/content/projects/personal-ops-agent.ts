import type { Project } from "@/lib/types";
export const personalOpsAgent: Project = {
  slug: "personal-ops-agent",
  name: "Personal Ops Agent",
  repoName: "Personal-ops-agent",
  shortDescription:
    "A Gemini tool-using assistant for notes and calendar tasks, with confirmation before calendar writes.",
  fullSummary:
    "A personal workflow experiment using a bounded agent loop, typed tool inputs and visible execution traces. It can work with local notes and Google Calendar, pausing for explicit confirmation before calendar create/edit/delete actions.",
  role: "Developer · personal AI application",
  collaborationType: "Personal project",
  problem:
    "A conversational assistant becomes useful when it can complete a concrete task, but calendar changes must remain understandable and explicitly approved.",
  users: ["An individual managing personal notes and calendar tasks"],
  responsibilities: [
    "Built a public personal-operations agent application.",
    "Connected a Gemini agent loop to typed notes/calendar tools.",
    "Implemented a pending-confirmation flow for calendar mutations.",
  ],
  constraints: [
    "Calendar writes need explicit approval.",
    "Provider calls and tools can fail or return incomplete details.",
    "Local OAuth storage and transient state limit the current deployment model.",
  ],
  technicalDecisions: [
    {
      title: "Bound the agent loop",
      detail:
        "The loop has a maximum iteration count and dispatches named tools through typed input schemas. It is a constrained application loop, not an assertion that model reasoning is deterministic.",
    },
    {
      title: "Intercept calendar writes",
      detail:
        "Calendar create/edit/delete tools return pending confirmation rather than calling the API. The resume path checks action/session correspondence before applying a confirmed change.",
    },
    {
      title: "Expose tool execution",
      detail:
        "Dispatcher trace events record tool calls, results and latency. Visible traces aid debugging but do not prove complete auditability or model correctness.",
    },
  ],
  technologies: [
    "Python",
    "FastAPI",
    "React",
    "Gemini",
    "SQLite",
    "Google Calendar OAuth",
  ],
  architecture: [
    {
      title: "Conversation UI",
      detail: "Task input · tool traces · confirmation",
    },
    {
      title: "Bounded agent loop",
      detail: "Gemini ↔ typed tool dispatcher",
    },
    {
      title: "Pending action",
      detail: "Session-bound calendar approval",
    },
    {
      title: "Tools / storage",
      detail: "Google Calendar · local notes / SQLite",
    },
  ],
  security: [
    "Typed tool validation and session-matched confirmation were inspected.",
    "Calendar mutations are gated; do not generalize approval to every tool.",
    "Local OAuth/token storage is not a verified multi-user authorization boundary.",
  ],
  dataFlow: [
    "Agent sessions and pending actions are stored in process memory.",
    "Notes use local persistence; OAuth credentials use local token storage.",
    "A process restart can lose pending/session state.",
  ],
  integrations: [
    "Gemini generation",
    "Google Calendar through OAuth",
    "Local note tools",
  ],
  testing: [
    "Tools, notes, loop, failures and confirmation test files are present.",
    "No formal adversarial evaluation or benchmark results were found.",
  ],
  deployment: [
    "Local/personal workflow application with frontend and FastAPI backend.",
    "No verified hosted demo or multi-user production deployment.",
  ],
  outcomes: [
    "A visible tool-and-confirmation workflow for concrete calendar tasks.",
    "An inspectable example of typed tools and bounded iteration.",
  ],
  limitations: [
    "In-memory sessions and local OAuth flow are unsuitable as a hardened multi-user design.",
    "Model outputs and tool arguments remain fallible.",
    "No measured evaluation coverage or deployment reliability.",
  ],
  nextSteps: [
    "Add durable, expiring pending actions and user-scoped OAuth storage.",
    "Evaluate ambiguous times, tool errors, prompt injection and denied confirmations.",
    "Capture a real end-to-end calendar approval trace.",
  ],
  repositoryUrl: "https://github.com/HiteshRawat28/Personal-ops-agent",
  liveUrl: null,
  media: [
    {
      src: "/media/generated/personal-ops-ui-v2.webp",
      alt: "Editorial interface concept showing a bounded assistant loop connecting notes and calendar tools through human confirmation",
      width: 1360,
      height: 1020,
      caption: "AI-generated concept visual — not a product screenshot.",
    },
  ],
  featured: false,
  categories: ["ai"],
  ai: {
    task: "Manage notes and propose calendar actions.",
    provider: "Gemini",
    permissions:
      "Named, typed notes and calendar tools; local personal context.",
    humanApproval: "Calendar create/edit/delete pauses for confirmation.",
    guardrails:
      "Typed arguments and bounded loop; session-matched pending actions.",
    observability: "Tool/result traces with latency in the dispatcher.",
    failureHandling:
      "Validation and tool exceptions return error results; pending actions can be cancelled.",
    evaluation: "Test files present; no formal adversarial evaluation.",
    limitations:
      "Transient memory and local OAuth storage; not hardened multi-user authorization.",
  },
};
