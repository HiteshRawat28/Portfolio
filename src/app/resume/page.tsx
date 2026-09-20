import { profile } from "@/content/profile";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { Button } from "@/components/primitives/Button";
import { AccessibleIcon } from "@/components/primitives/AccessibleIcon";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata(
  "Résumé",
  "Education, engineering projects and team experience. Download Hitesh Rawat's original résumé PDF.",
  "/resume",
);
export default function ResumePage() {
  return (
    <Container className="section-space">
      <p className="eyebrow text-accent">Résumé / Hitesh Rawat</p>
      <Heading level={1} className="mt-6">
        Experience you can inspect.
      </Heading>
      <Text className="mt-6 text-lg">{profile.positioning}</Text>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button
          href="/Hitesh-Rawat-Resume.pdf"
          download="Hitesh-Rawat-Resume.pdf"
        >
          <AccessibleIcon name="download" />
          Download résumé PDF
        </Button>
        <Button href="/Hitesh-Rawat-Resume.pdf" variant="secondary">
          Open PDF
        </Button>
      </div>
      <div className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
        <div>
          <Heading>Education & foundations</Heading>
          <Text className="mt-4">{profile.education}</Text>
          <Text>{profile.educationPeriod}</Text>
          <Text className="mt-4">{profile.problemSolving}</Text>
        </div>
        <div>
          <Heading>Projects & collaboration</Heading>
          <Text className="mt-4">
            FleetPilot and SwiftBill are full-stack projects. AssetFlow and
            DealOS are collaborative hackathon work; two AI applications explore
            tool approval and generation controls.
          </Text>
          <Text className="mt-4">{profile.leadership}</Text>
        </div>
      </div>
      <Text className="mt-12 text-sm">
        PDF is the original provided document; the website summary omits phone
        number and academic marks.
      </Text>
    </Container>
  );
}
