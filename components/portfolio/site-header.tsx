/* eslint-disable @next/next/no-html-link-for-pages */
import { ArrowUpRight, Menu } from "lucide-react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#ai-lab", label: "AI Lab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Hitesh Rawat, home">
        HR<span className="wordmark-dot">.</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <a href={link.href} key={link.href}>{link.label}</a>
        ))}
      </nav>
      <a className="header-action" href="/resume">
        Résumé <ArrowUpRight aria-hidden="true" size={15} />
      </a>
      <details className="mobile-menu">
        <summary>
          <Menu aria-hidden="true" size={20} />
          <span>Menu</span>
        </summary>
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
          <a href="/resume">Résumé</a>
        </nav>
      </details>
    </header>
  );
}
