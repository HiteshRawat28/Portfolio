import Link from "next/link";
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
      <Link className="wordmark" href="/" aria-label="Hitesh Rawat, home">
        HR<span className="wordmark-dot">.</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>{link.label}</Link>
        ))}
      </nav>
      <Link className="header-action" href="/resume">
        Résumé <ArrowUpRight aria-hidden="true" size={15} />
      </Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">
          <Menu aria-hidden="true" size={20} />
          <span>Menu</span>
        </summary>
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
          <Link href="/resume">Résumé</Link>
        </nav>
      </details>
    </header>
  );
}
