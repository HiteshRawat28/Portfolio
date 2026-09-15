import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { aiProjects, fullStackProjects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

const lenses = {
  "full-stack": {
    metadataTitle: "Full-Stack Engineering",
    eyebrow: "FULL-STACK ENGINEERING",
    title: "End-to-end ownership, backed by system boundaries.",
    intro: "Evidence across product interfaces, APIs, relational models, authorization, transactions, external integrations, testing, and deployment.",
    projects: fullStackProjects,
    signals: ["Product ownership", "API and data modeling", "Authorization and multi-tenancy", "Transactional workflows", "Testing and delivery"],
  },
  "ai-applications": {
    metadataTitle: "AI Application Engineering",
    eyebrow: "AI APPLICATION ENGINEERING",
    title: "AI integrated into workflows, not added as decoration.",
    intro: "Evidence around tool permissions, human confirmation, guardrails, observable execution, provider failures, and application-level controls.",
    projects: aiProjects,
    signals: ["Constrained tool access", "Human-in-the-loop mutations", "Input and output controls", "Execution traces", "Failure and quota handling"],
  },
};

export function generateStaticParams() {
  return Object.keys(lenses).map((role) => ({ role }));
}

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }): Promise<Metadata> {
  const { role } = await params;
  const lens = lenses[role as keyof typeof lenses];
  return lens ? pageMetadata({ title: lens.metadataTitle, description: lens.intro, path: `/focus/${role}` }) : {};
}

export default async function FocusPage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params;
  const lens = lenses[role as keyof typeof lenses];
  if (!lens) notFound();

  return (
    <PageShell>
      <header className="focus-hero">
        <div>
          <p className="eyebrow">{lens.eyebrow}</p>
          <h1>{lens.title}</h1>
          <p>{lens.intro}</p>
        </div>
        <aside>
          <p>HIRING SIGNALS</p>
          <ol>{lens.signals.map((signal) => <li key={signal}>{signal}</li>)}</ol>
        </aside>
      </header>
      <section className="focus-projects" aria-label={`${lens.eyebrow} projects`}>
        {lens.projects.map((project, index) => (
          <article key={project.slug}>
            <div className="focus-project-index">0{index + 1}</div>
            <div>
              <p className="eyebrow">{project.eyebrow}</p>
              <h2>{project.name}</h2>
              <p>{project.shortDescription}</p>
            </div>
            <div className="focus-project-proof">
              <p>{project.decisions.map((decision) => decision.title).join(" · ")}</p>
              <a href={`/projects/${project.slug}`}>Case study <ArrowUpRight aria-hidden="true" size={16} /></a>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
