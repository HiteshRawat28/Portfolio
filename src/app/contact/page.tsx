import loadComponent from "next/dynamic";
import { profile } from "@/content/profile";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { TextLink } from "@/components/primitives/TextLink";
import { SocialLink } from "@/components/primitives/SocialLink";
import { buildMetadata } from "@/lib/metadata";
import { getContactConfig } from "@/lib/contact-config";
// Import a server wrapper so the client form stays a separate bundle.
const ContactFormSection = loadComponent(
  () => import("@/components/sections/ContactFormSection"),
);
export const metadata = buildMetadata(
  "Contact",
  "Contact Hitesh Rawat about software development, full-stack engineering and AI application roles.",
  "/contact",
);
export const dynamic = "force-dynamic";
export default function ContactPage() {
  const { configured } = getContactConfig();
  return (
    <Container className="section-space">
      <p className="eyebrow text-accent">Contact / opportunities</p>
      <Heading level={1} className="mt-6">
        I’m open to software engineering opportunities.
      </Heading>
      <Text className="mt-6 text-lg">
        If you’re hiring for full-stack, backend, or practical AI application
        work, send the role, team, and a little context.
      </Text>
      <div className="mt-8">
        <TextLink
          href={`mailto:${profile.email}`}
          className="break-all text-lg"
        >
          {profile.email}
        </TextLink>
      </div>
      <a
        href={`tel:${profile.phone}`}
        className="feedback mt-5 inline-block border-b border-border-strong pb-1 hover:border-accent hover:text-accent"
      >
        Call: {profile.phone}
      </a>
      <div className="mt-6 flex flex-wrap gap-6">
        {profile.links.slice(0, 2).map((link) => (
          <SocialLink key={link.label} label={link.label} href={link.href} />
        ))}
      </div>
      <ContactFormSection available={configured} />
      <noscript>
        <style>{".contact-form { display: none; }"}</style>
        <Text className="mt-8 text-sm">
          The form requires JavaScript. Please use the direct email link above.
        </Text>
      </noscript>
    </Container>
  );
}
