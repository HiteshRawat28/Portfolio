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
        My full-stack engineering work.
      </Heading>
      <Text className="mt-6 text-lg">
        These projects connect interfaces to API boundaries, authorization,
        transactions, and operational data. My role and the limits of each
        implementation stay visible throughout.
      </Text>
      <TextLink href="/focus/ai-applications" className="mt-5">
        View the AI applications focus
      </TextLink>
      <FocusProjects order={fullStackOrder} />
    </Container>
  );
}
