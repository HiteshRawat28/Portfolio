import { fullStackOrder } from "@/content/projects";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { TextLink } from "@/components/primitives/TextLink";
import { FocusProjects } from "@/components/sections/FocusProjects";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata(
  "Full-stack engineering",
  "Business systems with APIs, organization-aware access, data consistency and explicit engineering trade-offs.",
  "/focus/full-stack",
);
export default function FocusPage() {
  return (
    <Container className="section-space">
      <p className="eyebrow text-accent">Focus / full-stack</p>
      <Heading level={1} className="mt-6">
        Interfaces, APIs and business rules.
      </Heading>
      <Text className="mt-6 text-lg">
        For full-stack and software-development roles: start with FleetPilot’s
        operational workflow, then compare tenant-aware asset management,
        transactional billing, and collaborative sales operations. Look for
        decisions that connect the interface to server-side rules.
      </Text>
      <TextLink href="/focus/ai-applications" className="mt-5">
        View the AI applications focus
      </TextLink>
      <FocusProjects order={fullStackOrder} />
    </Container>
  );
}
