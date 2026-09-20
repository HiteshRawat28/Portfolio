import { Section } from "../primitives/Section";
import { Button } from "../primitives/Button";
import { TextLink } from "../primitives/TextLink";
import { profile } from "@/content/profile";

export function ContactCTA() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-badge">Let’s connect</p>
        <h2 className="mt-7 text-section font-normal">
          Have a role or a technical problem in mind?
        </h2>
        <p className="mx-auto mt-7 text-lg text-secondary">
          Software development, full-stack engineering, or practical AI
          applications.
        </p>
        <div className="mt-8">
          <Button href="/contact">Start a conversation</Button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {profile.links.map((link) => (
            <TextLink key={link.label} href={link.href} external>
              {link.label}
            </TextLink>
          ))}
        </div>
        <TextLink
          href={`mailto:${profile.email}`}
          className="mt-8 break-all text-lg"
        >
          {profile.email}
        </TextLink>
      </div>
    </Section>
  );
}
