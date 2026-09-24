import { Container } from "../primitives/Container";
import { Button } from "../primitives/Button";
import { TextLink } from "../primitives/TextLink";
import { SocialLink } from "../primitives/SocialLink";
import { profile } from "@/content/profile";
import { HeroDecoration } from "./HeroDecoration";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="portfolio-hero relative isolate overflow-hidden border-b border-border"
    >
      <HeroDecoration />
      <Container className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="craft-reveal lg:col-span-9">
          <p className="eyebrow inline-flex min-h-11 items-center gap-3 text-accent">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            Software engineer · LNMIIT, Jaipur
          </p>
          <h1 id="hero-title" className="mt-7 max-w-5xl text-hero font-normal">
            {profile.name}.
          </h1>
          <p className="mt-7 max-w-4xl text-3xl leading-tight md:text-5xl">
            Building full-stack products and practical AI applications.
          </p>
          <p className="mt-7 max-w-2xl text-base text-secondary md:text-lg">
            I connect product interfaces to backend rules, data consistency, and
            explicit human control when AI enters the workflow.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap">
            <Button href="#selected-work">View selected projects</Button>
            <Button href="/resume" variant="secondary">
              View résumé
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {profile.links.slice(0, 2).map((link) => (
              <SocialLink
                key={link.label}
                label={link.label}
                href={link.href}
              />
            ))}
            <TextLink href={`mailto:${profile.email}`} className="text-sm">
              Email me
            </TextLink>
          </div>
        </div>
        <aside className="craft-reveal craft-reveal-delay border-t border-border pt-5 lg:col-span-3">
          <p className="eyebrow text-secondary">Current context</p>
          <p className="mt-4 text-lg leading-snug">{profile.education}</p>
          <p className="mt-3 text-sm text-secondary">
            {profile.educationPeriod}
          </p>
          <p className="mt-8 text-sm text-secondary">{profile.location}</p>
          <p className="mt-2 border-l-2 border-accent pl-3 text-sm">
            Open to software engineering opportunities
          </p>
        </aside>
      </Container>
    </section>
  );
}
