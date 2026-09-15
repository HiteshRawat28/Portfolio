import { PageShell } from "@/components/portfolio/page-shell";
import { ProjectRow } from "@/components/portfolio/project-row";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Full-stack systems and AI application projects by Hitesh Rawat.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageShell>
      <header className="page-hero">
        <p className="eyebrow">PROJECT INDEX</p>
        <h1>Systems, workflows, and experiments.</h1>
        <p>Selected work across multi-tenant products, business-domain logic, external integrations, and responsible AI application patterns.</p>
      </header>
      <section className="index-list" aria-label="All projects">
        {projects.map((project, index) => <ProjectRow project={project} index={index + 1} headingLevel="h2" key={project.slug} />)}
      </section>
    </PageShell>
  );
}
