import Link from "next/link";
import type { Project } from "@/lib/types";
import { PortfolioImage } from "../primitives/PortfolioImage";
import { TextLink } from "../primitives/TextLink";

export function ProjectPreview({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reverse = index % 2 === 1;
  return (
    <article className="grid min-w-0 gap-7 border-t border-border py-10 md:col-span-12 md:grid-cols-12 md:items-center md:gap-10 lg:py-14">
      <Link
        href={`/projects/${project.slug}`}
        className={`feedback group block min-h-11 rounded-media text-primary no-underline md:col-span-7 ${reverse ? "md:order-2" : ""}`}
      >
        <PortfolioImage
          media={project.media[0]}
          label={project.name + " concept visual"}
          aspect="landscape"
        />
      </Link>
      <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
        <p className="eyebrow text-secondary">
          {String(index + 1).padStart(2, "0")} / {project.collaborationType}
        </p>
        <h3 className="mt-4 text-4xl font-normal md:text-5xl">
          {project.name}
        </h3>
        <p className="mt-3 text-sm font-medium text-primary">{project.role}</p>
        <p className="mt-5 text-secondary">{project.shortDescription}</p>
        <div className="mt-6 border-y border-border py-5">
          <p className="eyebrow text-accent">Selected decision</p>
          <p className="mt-3 font-medium">
            {project.technicalDecisions[0]?.title}
          </p>
          <p className="mt-2 text-sm text-secondary">
            {project.technicalDecisions[0]?.detail}
          </p>
        </div>
        <p className="mt-5 text-sm text-secondary">
          {project.technologies.slice(0, 4).join(" · ")}
        </p>
        {project.slug === "swiftbill" && (
          <p className="mt-4 border-l-2 border-border-strong pl-4 text-xs text-secondary">
            Educational tax logic—not certified accounting or tax software.
          </p>
        )}
        <TextLink href={`/projects/${project.slug}`} className="mt-6 text-sm">
          Read case study
        </TextLink>
      </div>
    </article>
  );
}
