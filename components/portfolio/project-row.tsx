import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectRow({ project, index, headingLevel = "h3" }: { project: Project; index: number; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <article className="project-row">
      <p className="project-row-number">{String(index).padStart(2, "0")}</p>
      <div className="project-row-main">
        <p className="eyebrow">{project.eyebrow}</p>
        <Heading>{project.name}</Heading>
        <p>{project.shortDescription}</p>
      </div>
      <div className="project-row-aside">
        <p>{project.technologies.slice(0, 5).join(" · ")}</p>
        <a href={`/projects/${project.slug}`}>
          Case study <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </article>
  );
}
