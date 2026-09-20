import { profile } from "@/content/profile";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Stack } from "@/components/primitives/Stack";
import { Divider } from "@/components/primitives/Divider";
import { Text } from "@/components/primitives/Text";
import { TextLink } from "@/components/primitives/TextLink";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata(
  "About",
  "Hitesh Rawat, LNMIIT computer science undergraduate in Jaipur. Engineering approach, education and team experience.",
  "/about",
);
export default function AboutPage() {
  return (
    <Container className="section-space">
      <p className="eyebrow text-accent">
        About / the engineer behind the work
      </p>
      <Heading level={1} className="mt-6">
        I connect interfaces to the rules behind them.
      </Heading>
      <Stack className="mt-8 max-w-3xl">
        <Text className="text-lg">{profile.bio}</Text>
        <Divider />
        <div>
          <Heading>Education</Heading>
          <Text className="mt-4">{profile.education}</Text>
          <Text>{profile.educationPeriod}</Text>
        </div>
        <div>
          <Heading>Working with teams</Heading>
          <Text className="mt-4">{profile.leadership}</Text>
          <Text className="mt-4">{profile.achievement}</Text>
        </div>
        <div>
          <Heading>Engineering approach</Heading>
          <Text className="mt-4">
            I make authorization, data consistency and failure behavior part of
            the workflow—not hidden assumptions. The case studies explain the
            implementation and what still needs testing.
          </Text>
          <Text className="mt-4">{profile.problemSolving}</Text>
        </div>
        <div className="flex flex-wrap gap-6">
          {profile.links.map((link) => (
            <TextLink key={link.label} href={link.href} external>
              {link.label}
            </TextLink>
          ))}
          <TextLink href="/contact">Get in touch</TextLink>
        </div>
      </Stack>
    </Container>
  );
}
