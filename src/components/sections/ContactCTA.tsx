import { Section } from "../primitives/Section";
import { Button } from "../primitives/Button";
import { TextLink } from "../primitives/TextLink";
import { profile } from "@/content/profile";

export function ContactCTA() {
  const professionalLinks = profile.links.filter((link) =>
    ["GitHub", "LinkedIn"].includes(link.label),
  );
  return (
    <Section id="contact" className="bg-accent-subtle">
      <div className="mx-auto max-w-4xl text-center">
        <p className="eyebrow text-accent">Open to opportunities</p>
        <h2 className="mt-7 text-section font-normal">
          I’m open to software engineering opportunities.
        </h2>
        <p className="mx-auto mt-7 text-lg text-secondary">
          Especially roles involving full-stack product work, backend systems,
          or practical AI applications.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Email me</Button>
          <Button href="/resume" variant="secondary">
            View résumé
          </Button>
        </div>
        <div className="mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
          {professionalLinks.map((link) => (
            <TextLink
              key={link.label}
              href={link.href}
              external
              className="justify-between rounded-button border border-border bg-surface-elevated px-4 py-2.5 text-sm no-underline hover:border-accent hover:bg-background"
            >
              {link.label}
            </TextLink>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="feedback group mx-auto mt-4 flex max-w-2xl items-center justify-between gap-5 rounded-media border border-border-strong bg-surface-elevated px-5 py-4 text-left text-primary hover:border-accent"
        >
          <span className="min-w-0">
            <span className="eyebrow block text-secondary">Direct email</span>
            <span className="mt-1 block break-all text-lg font-medium">
              {profile.email}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-inverse"
          >
            →
          </span>
        </a>
      </div>
    </Section>
  );
}
