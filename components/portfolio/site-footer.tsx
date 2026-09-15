/* eslint-disable @next/next/no-html-link-for-pages */
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="wordmark" href="/" aria-label="Hitesh Rawat, home">
          HR<span className="wordmark-dot">.</span>
        </a>
        <p>Full-stack software engineer building business systems and practical AI applications.</p>
      </div>
      <nav aria-label="Footer navigation">
        <a href="/projects">Projects</a>
        <a href="/focus/full-stack">Full-stack</a>
        <a href="/focus/ai-applications">AI applications</a>
        <a href="/resume">Résumé</a>
      </nav>
      <div className="footer-external">
        <a href="https://github.com/HiteshRawat28" target="_blank" rel="noreferrer noopener">
          GitHub <ArrowUpRight aria-hidden="true" size={14} />
        </a>
        <a href="https://www.linkedin.com/in/hitesh-rawat-a67ba9284" target="_blank" rel="noreferrer noopener">
          LinkedIn <ArrowUpRight aria-hidden="true" size={14} />
        </a>
        <p>© {new Date().getFullYear()} Hitesh Rawat</p>
      </div>
    </footer>
  );
}
