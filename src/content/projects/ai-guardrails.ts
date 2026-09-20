import type { Project } from "@/lib/types";
export const aiGuardrails: Project = {
  slug: "ai-guardrails",
  name: "AI Chat with Guardrails",
  repoName: "AI-chat-App-with-Gaurdrails",
  shortDescription:
    "A Gemini chat experiment with input/output checks, refusal paths, rate limits, and guardrail events.",
  fullSummary:
    "An AI chat application exploring the controls around generation: validate a request, apply input rules, call the provider, then check the output before displaying it. The case study separates mechanisms visible in source from the robustness the project has not yet demonstrated.",
  role: "Developer · personal AI application",
  collaborationType: "Personal project",
  problem:
    "An API-connected chat screen alone says little about how rejected content, provider failures or abusive traffic are handled.",
  users: [
    "Authenticated users submitting chat messages",
    "A demo administrator inspecting guardrail events",
  ],
  responsibilities: [
    "Built the public guardrails chat experiment.",
    "Implemented pre/post-generation rule pipelines and event logging.",
    "Explored request throttling and provider-failure handling.",
  ],
  constraints: [
    "Rule filters can miss meaning or over-block legitimate requests.",
    "Rate limiting must consider simultaneous requests.",
    "A demo administrator identity is not a scalable role model.",
  ],
  technicalDecisions: [
    {
      title: "Check both sides of generation",
      detail:
        "Input rules run before the provider and output rules choose allow, sanitize or fallback paths. Each mechanism is explicit, but keyword/rule behavior is not evidence of semantic safety.",
    },
    {
      title: "Record rejection reasons",
      detail:
        "Guardrail events make policy decisions inspectable. Logs support diagnosis; precision/recall and adversarial coverage still require an evaluation dataset.",
    },
    {
      title: "Describe the limiter accurately",
      detail:
        "Source uses a database-backed fixed-window counter, despite a leaky-bucket claim in its README. Non-atomic counter updates require concurrency testing.",
    },
  ],
  technologies: [
    "React",
    "JavaScript",
    "Express",
    "Gemini",
    "PostgreSQL",
    "Prisma",
    "Jest",
  ],
  architecture: [
    {
      title: "Authenticated request",
      detail: "JWT · input validation · fixed-window counter",
    },
    {
      title: "Input checks",
      detail: "Rules → allow / refusal",
    },
    {
      title: "Generation",
      detail: "Gemini call · provider failure paths",
    },
    {
      title: "Output checks",
      detail: "Allow / sanitize / fallback + event logging",
    },
  ],
  security: [
    "JWT authentication middleware was inspected.",
    "Input/output rule checks and event logging are present.",
    "Development secret fallback and hardcoded demo admin identity are limitations, not robust access control.",
  ],
  dataFlow: [
    "Chat and guardrail records persist through Prisma/PostgreSQL.",
    "Rate-limit counts/reset times are stored per user.",
    "Counter updates and output-rule short-circuit behavior need stronger regression tests.",
  ],
  integrations: ["Gemini API", "Prisma/PostgreSQL event persistence"],
  testing: [
    "Jest input/output guardrail unit-test files are present.",
    "No measured precision/recall, red-team dataset or complete provider-failure evaluation was found.",
  ],
  deployment: [
    "No verified hosted demo; repository inspection is available.",
    "Production secret/admin configuration would need hardening in the source application.",
  ],
  outcomes: [
    "An inspectable generation pipeline with explicit refusal/sanitization/fallback paths.",
    "A concrete place to discuss evaluation gaps, not claim hallucination-free output.",
  ],
  limitations: [
    "Rule-based filters do not establish adversarial robustness.",
    "Output sanitization can short-circuit subsequent rules.",
    "Fixed-window updates are not atomic; hardcoded admin/development secret assumptions remain.",
  ],
  nextSteps: [
    "Add semantic/adversarial and rule-order regression fixtures.",
    "Make rate-limit updates atomic and replace demo admin identity with stored roles.",
    "Remove secret fallbacks and verify provider failure, timeout and quota handling.",
  ],
  repositoryUrl: "https://github.com/HiteshRawat28/AI-chat-App-with-Gaurdrails",
  liveUrl: null,
  media: [
    {
      src: "/media/generated/ai-guardrails-concept.webp",
      alt: "Monochrome concept illustration of conversation paths passing through layered safety and evaluation checkpoints",
      width: 1374,
      height: 1145,
      caption: "AI-generated concept visual — not a product screenshot.",
    },
  ],
  featured: false,
  categories: ["ai"],
  ai: {
    task: "Chat with explicit checks around generation.",
    provider: "Gemini",
    permissions: "Text generation; no external action tools.",
    humanApproval:
      "No external mutations to approve; refusals/fallbacks are visible.",
    guardrails: "Input rules, output rules and fixed-window throttling.",
    observability: "Persisted guardrail events/reasons.",
    failureHandling: "Refusal, sanitized response and provider-error paths.",
    evaluation:
      "Jest rule tests present; no measured adversarial/semantic robustness.",
    limitations:
      "Rule ordering, non-atomic limiter and demo auth assumptions require hardening.",
  },
};
