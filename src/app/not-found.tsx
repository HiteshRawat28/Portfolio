import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Button } from "@/components/primitives/Button";
export default function NotFound() {
  return (
    <Container className="section-space">
      <p className="eyebrow text-accent">404 / Page not found</p>
      <Heading level={1} className="mt-6">
        This page isn’t here.
      </Heading>
      <Text className="mt-6">
        The address may have changed. Explore the projects or return to the
        homepage.
      </Text>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/">Back to home</Button>
        <Button href="/projects" variant="secondary">
          Explore projects
        </Button>
      </div>
    </Container>
  );
}
