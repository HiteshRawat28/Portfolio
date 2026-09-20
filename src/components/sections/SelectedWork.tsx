import { featuredWorkOrder, getProject } from "@/content/projects";
import { Container } from "../primitives/Container";
import { TextLink } from "../primitives/TextLink";
import { ProjectPreview } from "./ProjectPreview";

export function SelectedWork() {
  const entries = featuredWorkOrder.flatMap((slug) => {
    const project = getProject(slug);
    return project ? [project] : [];
  });
  return (
    <section
      id="selected-work"
      aria-labelledby="work-title"
      className="section-space"
    >
      <Container className="mb-10 grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="eyebrow text-accent">Featured work / 01—03</p>
          <h2 id="work-title" className="mt-5 text-section font-normal">
            Projects that show how I engineer.
          </h2>
        </div>
        <div className="md:col-span-4 md:text-right">
          <p className="text-sm text-secondary">
            Three representative builds, with authorship and limitations kept
            explicit.
          </p>
          <TextLink href="/projects" className="mt-3">
            View all six projects
          </TextLink>
        </div>
      </Container>
      <div className="project-gallery grid gap-0">
        {entries.map((project, index) => (
          <ProjectPreview key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
