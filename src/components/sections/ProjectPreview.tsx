import Link from "next/link";
import type { Project } from "@/lib/types";
import { PortfolioImage } from "../primitives/PortfolioImage";

export function ProjectPreview({
  project,
  offset = false,
}: {
  project: Project;
  offset?: boolean;
}) {
  return (
    <article className={`min-w-0 ${offset ? "md:relative md:top-24" : ""}`}>
      <Link
        href={`/projects/${project.slug}`}
        className="feedback group block min-h-11 rounded-media text-primary no-underline"
      >
        <PortfolioImage
          media={project.media[0]}
          label={project.name + " screenshot"}
          aspect="project"
        />
        <div className="mt-4 flex min-h-11 flex-wrap items-start justify-between gap-2 px-3">
          <h3 className="text-2xl font-normal">{project.name}</h3>
          <span className="text-sm text-secondary group-hover:text-primary group-focus-visible:text-primary">
            View case study
          </span>
        </div>
      </Link>
      <p className="mt-2 px-3 text-sm text-secondary">
        {project.shortDescription}
      </p>
      <p className="mt-3 px-3 text-xs text-secondary">
        {project.collaborationType}
      </p>
      {project.slug === "swiftbill" && (
        <p className="mt-3 px-3 text-xs text-secondary">
          Educational tax logic—not certified accounting or tax software.
        </p>
      )}
    </article>
  );
}
