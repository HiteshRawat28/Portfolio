import { Container } from "../primitives/Container";
import { Button } from "../primitives/Button";
import { profile } from "@/content/profile";
import { HeroDecoration } from "./HeroDecoration";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="portfolio-hero relative isolate overflow-hidden text-center"
    >
      <HeroDecoration />
      <Container className="relative z-10">
        <p className="mx-auto inline-flex min-h-11 items-center gap-3 rounded-full border border-border-strong bg-surface px-4 text-sm">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-primary"
          />
          {profile.name} · Software engineer
        </p>
        <h1 id="hero-title" className="hero-copy mt-8 text-hero font-normal">
          Full-stack systems.
          <br />
          Practical AI applications.
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-base text-secondary md:text-lg">
          {profile.positioning}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="#selected-work">View selected work</Button>
          <Button href="/contact" variant="secondary">
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  );
}
