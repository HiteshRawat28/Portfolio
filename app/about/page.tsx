/* eslint-disable @next/next/no-html-link-for-pages */
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: "About Hitesh Rawat, his engineering focus, education, and working style.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <header className="page-hero about-page-hero">
        <p className="eyebrow">ABOUT HITESH</p>
        <h1>I care about the parts of software that have to stay correct.</h1>
        <p>Permissions, transactions, operational state, integration failures, and the point where a technical system becomes useful to a person.</p>
      </header>
      <section className="story-grid">
        <div className="story-main">
          <h2>From interfaces to operational systems</h2>
          <p>I am pursuing a B.Tech in Computer Science and Engineering at The LNM Institute of Information Technology in Jaipur, with an expected graduation in 2027.</p>
          <p>My projects started with full-stack product development and increasingly moved toward multi-tenant systems, business-domain workflows, authorization boundaries, and AI features that need explicit controls.</p>
          <p>I am looking for software development, full-stack, and AI application roles where I can contribute across the product surface and the systems underneath it.</p>
        </div>
        <aside className="story-aside">
          <div><span>EDUCATION</span><strong>LNMIIT · B.Tech CSE</strong><small>2023–2027 · Jaipur</small></div>
          <div><span>LEADERSHIP</span><strong>Vivacity · Artist Management</strong><small>Logistics, scheduling, and event execution</small></div>
          <div><span>PRACTICE</span><strong>300+ LeetCode problems</strong><small>Data structures, algorithms, and problem solving</small></div>
        </aside>
      </section>
      <section className="working-style">
        <p className="eyebrow">HOW I WORK</p>
        <div>
          <article><span>01</span><h2>Model the workflow</h2><p>Start with roles, state changes, constraints, and failure cases before polishing screens.</p></article>
          <article><span>02</span><h2>Keep policy server-side</h2><p>Authentication, authorization, tenant boundaries, and validation should not depend on client trust.</p></article>
          <article><span>03</span><h2>Make limitations visible</h2><p>Document what has been verified, what remains experimental, and what should be improved next.</p></article>
        </div>
      </section>
      <section className="simple-cta"><h2>See the systems behind the approach.</h2><a href="/projects">View project index <ArrowUpRight aria-hidden="true" size={17} /></a></section>
    </PageShell>
  );
}
