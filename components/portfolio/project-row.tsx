import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-row">
      <p className="project-row-number">{String(index).padStart(2, "0")}</p>
      <div className="project-row-main">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.name}</h3>
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
