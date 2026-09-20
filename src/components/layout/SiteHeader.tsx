import Link from "next/link";
import { Container } from "../primitives/Container";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-md">
      <Container className="portfolio-nav flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Hitesh Rawat home"
          className="feedback inline-flex min-h-11 items-center gap-3 text-base font-medium hover:text-accent"
        >
          <span
            aria-hidden="true"
            className="inline-flex size-8 items-center justify-center rounded-tag bg-accent text-xs text-inverse"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 4v16M11 4v16M3 12h8m5 8V4h3q4 0 4 4t-4 4h-3m3 0 4 8" />
            </svg>
          </span>
          Hitesh Rawat
        </Link>
        <MobileMenu />
      </Container>
      <noscript>
        <nav
          aria-label="Navigation without JavaScript"
          className="site-container flex flex-wrap gap-4 pb-4"
        >
          {[
            ["/projects", "Work"],
            ["/#experience", "Experience"],
            ["/about", "About"],
            ["/resume", "Résumé"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="min-h-11 min-w-11 content-center text-accent"
            >
              {label}
            </a>
          ))}
        </nav>
      </noscript>
    </header>
  );
}
