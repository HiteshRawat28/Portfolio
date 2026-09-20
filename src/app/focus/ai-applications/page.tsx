import { aiOrder } from "@/content/projects";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { TextLink } from "@/components/primitives/TextLink";
import { FocusProjects } from "@/components/sections/FocusProjects";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata(
  "AI applications",
  "AI in operational workflows: tool permissions, human approval, guardrails, traces, failure paths and evaluation gaps.",
  "/focus/ai-applications",
);
export default function FocusPage() {
  return (
    <Container className="section-space">
      <p className="eyebrow text-ai-accent">Focus / ai-applications</p>
      <Heading level={1} className="mt-6">
        AI inside a real workflow.
      </Heading>
      <Text className="mt-6 text-lg">
        For AI-application roles: start with FleetPilot’s operational Copilot,
        then explore typed calendar tools and generation checks. The emphasis is
        permissions, approval, traces and failure behavior—not a model-provider
        badge. Supporting business systems follow the AI projects.
      </Text>
      <TextLink href="/focus/full-stack" className="mt-5">
        View the full-stack focus
      </TextLink>
      <FocusProjects order={aiOrder} ai />
    </Container>
  );
}
