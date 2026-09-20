import { z } from "zod";
import loadComponent from "next/dynamic";
import { profile } from "@/content/profile";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { TextLink } from "@/components/primitives/TextLink";
import { buildMetadata } from "@/lib/metadata";
// Import a server wrapper so its client form is only loaded when delivery is configured.
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
  const configured = Boolean(
    process.env.RESEND_API_KEY?.trim() &&
    z.email().safeParse(process.env.CONTACT_TO_EMAIL?.trim()).success,
  );
  return (
    <Container className="section-space">
      <p className="eyebrow text-accent">Contact / start a conversation</p>
      <Heading level={1} className="mt-6">
        Have a role or a technical problem in mind?
      </Heading>
      <Text className="mt-6 text-lg">
        For software development, full-stack or AI application opportunities,
        include the role, team and a little context.
      </Text>
      <div className="mt-8">
        <TextLink
          href={`mailto:${profile.email}`}
          className="break-all text-lg"
        >
          {profile.email}
        </TextLink>
      </div>
      <div className="mt-6 flex flex-wrap gap-6">
        {profile.links.slice(0, 2).map((link) => (
          <TextLink key={link.label} href={link.href} external>
            {link.label}
          </TextLink>
        ))}
      </div>
      {configured ? (
        <>
          <ContactFormSection />
          <noscript>
            <style>{".contact-form { display: none; }"}</style>
            <Text className="mt-8 text-sm">
              The form requires JavaScript. Please use the direct email link
              above.
            </Text>
          </noscript>
        </>
      ) : (
        <Text className="mt-8 max-w-2xl border-t border-border pt-8 text-sm">
          The direct email link above is the contact method for this local
          build. The optional form appears when email delivery is configured.
        </Text>
      )}
    </Container>
  );
}
