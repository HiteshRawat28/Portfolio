import { getProject, moreWorkOrder } from "@/content/projects";
import { Section } from "../primitives/Section";
import { TextLink } from "../primitives/TextLink";

export function MoreProjects() {
  const projects = moreWorkOrder.flatMap((slug) => {
    const project = getProject(slug);
    return project ? [project] : [];
  });

  return (
    <Section id="more-projects" className="bg-surface">
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="eyebrow text-accent">More projects / 04—06</p>
          <h2 className="mt-5 text-section font-normal">
            More systems, different constraints.
          </h2>
        </div>
        <p className="text-sm text-secondary md:col-span-4">
          Collaborative work, organization-scoped asset management, and an AI
          guardrails experiment complete the portfolio.
        </p>
      </div>
      <div className="mt-10 divide-y divide-border border-y border-border">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="grid gap-5 py-7 md:grid-cols-12 md:items-start"
          >
            <p className="eyebrow text-secondary md:col-span-1">
              {String(index + 4).padStart(2, "0")}
            </p>
            <div className="md:col-span-3">
              <h3 className="text-3xl font-normal">{project.name}</h3>
              <p className="mt-3 text-sm text-secondary">{project.role}</p>
            </div>
            <div className="md:col-span-5">
              <p className="text-secondary">{project.shortDescription}</p>
              <p className="mt-3 text-sm text-secondary">
                {project.technologies.slice(0, 4).join(" · ")}
              </p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <TextLink href={`/projects/${project.slug}`} className="text-sm">
                Read case study
              </TextLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
