import loadComponent from "next/dynamic";
import { Container } from "../primitives/Container";
import { SocialLink } from "../primitives/SocialLink";
import { profile } from "@/content/profile";
import { getContactConfig } from "@/lib/contact-config";

const ContactFormSection = loadComponent(() => import("./ContactFormSection"));

export function ContactCTA() {
  const { configured } = getContactConfig();
  const professionalLinks = profile.links.filter((link) =>
    ["GitHub", "LinkedIn"].includes(link.label),
  );

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-space border-t border-border bg-accent-subtle"
    >
      <Container>
        <div className="flex flex-col gap-10 border-b border-border pb-14 md:flex-row md:items-start md:justify-between md:gap-16 md:pb-20">
          <div>
            <p className="eyebrow text-accent">Contact / opportunities</p>
            <h2 id="contact-title" className="mt-6 max-w-4xl text-section">
              I’m open to{" "}
              <span className="text-accent">software engineering</span>{" "}
              opportunities.
            </h2>
          </div>
          <a
            href="#contact-form"
            className="feedback flex size-40 shrink-0 flex-col items-center justify-center gap-5 self-start rounded-full border border-border-strong bg-surface-elevated text-center text-sm font-medium leading-tight hover:border-accent hover:text-accent md:size-52"
          >
            Start a<br /> conversation
            <span aria-hidden="true" className="text-4xl font-light">
              ↗
            </span>
          </a>
        </div>

        <div className="grid gap-14 pt-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="max-w-sm text-lg leading-relaxed text-secondary">
              Hiring for full-stack, backend, or practical AI application work?
              I’d like to hear about the role and the team.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="feedback mt-8 inline-block max-w-full break-all border-b border-border-strong pb-1 text-xl hover:border-accent hover:text-accent md:text-2xl"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="feedback mt-5 block w-fit border-b border-border-strong pb-1 text-base hover:border-accent hover:text-accent"
            >
              Call: {profile.phone}
            </a>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {professionalLinks.map((link) => (
                <SocialLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                />
              ))}
            </div>
          </div>
          <div id="contact-form">
            <ContactFormSection appearance="inline" available={configured} />
            <noscript>
              <style>{".contact-form { display: none; }"}</style>
              <p className="text-sm text-secondary">
                The form requires JavaScript. Use the email link beside it.
              </p>
            </noscript>
          </div>
        </div>
      </Container>
    </section>
  );
}
