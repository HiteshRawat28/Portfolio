import type { Capability } from "@/lib/types";
export const capabilities: Capability[] = [
  {
    title: "Product interfaces",
    description:
      "Role-aware operational screens, forms and task-focused workflows.",
    tools: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    description:
      "Validated requests, session handling and explicit business rules.",
    tools: ["Node.js", "Express", "FastAPI", "Zod", "JWT"],
  },
  {
    title: "Data & consistency",
    description:
      "Relational models, organization scope and coordinated writes.",
    tools: ["PostgreSQL", "Prisma", "SQL", "SQLite"],
  },
  {
    title: "AI applications",
    description:
      "Provider integration, typed tools, confirmation flows and failure paths.",
    tools: ["Gemini", "Groq", "Python", "Tool calling"],
  },
  {
    title: "Engineering foundations",
    description:
      "Source-level debugging, algorithms and local/deployment workflows.",
    tools: ["C++", "Git", "Docker", "Linux", "Vercel", "Render"],
  },
];
