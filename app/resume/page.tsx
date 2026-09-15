import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Résumé",
  description: "Résumé and professional summary for Hitesh Rawat.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <PageShell>
      <header className="page-hero resume-hero">
        <p className="eyebrow">RÉSUMÉ</p>
        <h1>Full-stack systems, practical AI, and product ownership.</h1>
        <p>A concise overview is available below. The source PDF is preserved as provided.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="/Hitesh-Rawat-Resume.pdf" download>Download PDF <ArrowDownToLine aria-hidden="true" size={17} /></a>
          <a className="button button-secondary" href="/Hitesh-Rawat-Resume.pdf" target="_blank" rel="noreferrer noopener">Open PDF <ArrowUpRight aria-hidden="true" size={17} /></a>
        </div>
      </header>
      <section className="resume-summary">
        <div><p className="eyebrow">POSITIONING</p><h2>Full-stack software engineer building secure business systems and practical AI applications.</h2></div>
        <div className="resume-columns">
          <section><h3>Core engineering</h3><p>React, TypeScript, Node.js, Express, REST APIs, PostgreSQL, Prisma, authentication, authorization, Docker, and Linux.</p></section>
          <section><h3>Systems demonstrated</h3><p>Fleet operations, asset governance, GST-oriented billing, quotation-to-cash, payment workflows, AI agents, and guardrails.</p></section>
          <section><h3>Education</h3><p>B.Tech Computer Science and Engineering, LNMIIT, Jaipur. Expected graduation: 2027.</p></section>
          <section><h3>Additional evidence</h3><p>Odoo Hackathon participant, Vivacity artist-management leadership, and 300+ LeetCode problems solved.</p></section>
        </div>
      </section>
    </PageShell>
  );
}
