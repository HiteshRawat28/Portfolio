import Link from "next/link";
import { Container } from "../primitives/Container";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background">
      <Container className="portfolio-nav flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Hitesh Rawat home"
          className="inline-flex min-h-11 items-center gap-3 text-lg font-medium"
        >
          <span
            aria-hidden="true"
            className="inline-flex size-8 items-center justify-center rounded-tag border border-border-strong text-xs"
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
        <div className="flex items-center gap-8">
          <MobileMenu />
          <Link
            href="/resume"
            className="feedback hidden min-h-11 items-center rounded-full border border-border-strong bg-surface px-5 text-sm hover:border-primary lg:inline-flex"
          >
            View résumé
          </Link>
        </div>
      </Container>
      <noscript>
        <nav
          aria-label="Navigation without JavaScript"
          className="site-container flex flex-wrap gap-4 pb-4"
        >
          {["projects", "about", "resume", "contact"].map((page) => (
            <a
              key={page}
              href={`/${page}`}
              className="min-h-11 min-w-11 content-center text-accent"
            >
              {page}
            </a>
          ))}
        </nav>
      </noscript>
    </header>
  );
}
