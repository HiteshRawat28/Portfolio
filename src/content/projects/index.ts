import { fleetpilot } from "./fleetpilot";
import { assetflow } from "./assetflow";
import { swiftbill } from "./swiftbill";
import { dealos } from "./dealos";
import { personalOpsAgent } from "./personal-ops-agent";
import { aiGuardrails } from "./ai-guardrails";
import type { Project } from "@/lib/types";
export const projects: readonly Project[] = [
  fleetpilot,
  assetflow,
  swiftbill,
  dealos,
  personalOpsAgent,
  aiGuardrails,
];
export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
export const homepageOrder = [
  "fleetpilot",
  "assetflow",
  "swiftbill",
  "dealos",
  "personal-ops-agent",
  "ai-guardrails",
] as const;
export const featuredWorkOrder = [
  "fleetpilot",
  "swiftbill",
  "personal-ops-agent",
] as const;
export const moreWorkOrder = ["assetflow", "dealos", "ai-guardrails"] as const;
export const fullStackOrder = [
  "fleetpilot",
  "assetflow",
  "swiftbill",
  "dealos",
] as const;
export const aiOrder = [
  "fleetpilot",
  "personal-ops-agent",
  "ai-guardrails",
  "assetflow",
  "swiftbill",
  "dealos",
] as const;
