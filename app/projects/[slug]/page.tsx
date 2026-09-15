import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.name, description: project.shortDescription };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <PageShell>
      <article className="case-study">
        <header className="case-hero">
          <Link className="back-link" href="/projects"><ArrowLeft aria-hidden="true" size={16} /> All projects</Link>
          <div className="case-title-grid">
            <p className="case-index">CASE / {String(projects.findIndex((item) => item.slug === project.slug) + 1).padStart(2, "0")}</p>
            <div>
              <p className="eyebrow">{project.eyebrow}</p>
              <h1>{project.name}</h1>
              <p className="case-summary">{project.summary}</p>
            </div>
            <dl className="case-meta">
              <div><dt>Role</dt><dd>{project.role}</dd></div>
              <div><dt>Context</dt><dd>{project.collaboration}</dd></div>
              <div><dt>Stack</dt><dd>{project.technologies.slice(0, 6).join(", ")}</dd></div>
            </dl>
          </div>
          <div className="case-actions">
            {project.liveUrl && <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer noopener">Live product <ArrowUpRight aria-hidden="true" size={17} /></a>}
            <a className="button button-secondary" href={project.repositoryUrl} target="_blank" rel="noreferrer noopener">View source <ArrowUpRight aria-hidden="true" size={17} /></a>
          </div>
        </header>

        {project.image && (
          <figure className="case-media">
            <Image unoptimized src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} />
            <figcaption>Project media from the public repository.</figcaption>
          </figure>
        )}

        <section className="case-section case-problem" aria-labelledby="problem-title">
          <p className="case-section-label">01 / PROBLEM</p>
          <div>
            <h2 id="problem-title">What the system needed to resolve</h2>
            <p className="case-large-copy">{project.problem}</p>
          </div>
          <div>
            <h3>Primary users</h3>
            <ul className="plain-list">{project.users.map((user) => <li key={user}>{user}</li>)}</ul>
          </div>
        </section>

        <section className="case-section" aria-labelledby="scope-title">
          <p className="case-section-label">02 / SCOPE</p>
          <div>
            <h2 id="scope-title">Responsibilities and constraints</h2>
            <div className="case-two-column">
              <div><h3>Responsibilities</h3><ul className="case-list">{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><h3>Constraints</h3><ul className="case-list">{project.constraints.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section className="case-section" aria-labelledby="architecture-title">
          <p className="case-section-label">03 / ARCHITECTURE</p>
          <div>
            <h2 id="architecture-title">System boundaries before visual complexity</h2>
            <div className="architecture-flow" aria-label={`${project.name} architecture overview`}>
              <div><span>01</span><strong>User surfaces</strong><small>Web, mobile, or conversational interface</small></div>
              <span className="flow-line" aria-hidden="true">→</span>
              <div><span>02</span><strong>Application policy</strong><small>Authentication, authorization, validation, orchestration</small></div>
              <span className="flow-line" aria-hidden="true">→</span>
              <div><span>03</span><strong>Data & integrations</strong><small>Relational state, external services, tools, and events</small></div>
            </div>
          </div>
        </section>

        <section className="case-section decisions-section" aria-labelledby="decisions-title">
          <p className="case-section-label">04 / DECISIONS</p>
          <div>
            <h2 id="decisions-title">Decisions shaped by the constraints</h2>
            <div className="decision-list">
              {project.decisions.map((decision, index) => (
                <article key={decision.title}><span>0{index + 1}</span><h3>{decision.title}</h3><p>{decision.body}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section evidence-section" aria-labelledby="evidence-title">
          <p className="case-section-label">05 / EVIDENCE</p>
          <div>
            <h2 id="evidence-title">Security, verification, and outcomes</h2>
            <div className="evidence-grid">
              <div><h3>Security & access</h3><ul className="plain-list">{project.security.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><h3>Testing & verification</h3><ul className="plain-list">{project.testing.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><h3>Verified outcomes</h3><ul className="plain-list">{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section className="case-section reflection-section" aria-labelledby="reflection-title">
          <p className="case-section-label">06 / REFLECTION</p>
          <div>
            <h2 id="reflection-title">Limitations are part of the engineering record</h2>
            <div className="case-two-column">
              <div><h3>Current limitations</h3><ul className="case-list">{project.limitations.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><h3>Next steps</h3><ul className="case-list">{project.nextSteps.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <nav className="case-next" aria-label="Project navigation">
          <Link href="/projects"><ArrowLeft aria-hidden="true" size={16} /> Project index</Link>
          <Link href="/contact">Discuss this work <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </nav>
      </article>
    </PageShell>
  );
}
