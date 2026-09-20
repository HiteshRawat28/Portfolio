import { homepageOrder, getProject } from "@/content/projects";
import { Container } from "../primitives/Container";
import { TextLink } from "../primitives/TextLink";
import { ProjectPreview } from "./ProjectPreview";

export function SelectedWork() {
  const entries = homepageOrder.flatMap((slug) => {
    const project = getProject(slug);
    return project ? [project] : [];
  });
  return (
    <section id="selected-work" aria-labelledby="work-title" className="pb-16">
      <Container className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 id="work-title" className="text-2xl font-normal">
          Selected projects
        </h2>
        <TextLink href="/projects">All projects</TextLink>
      </Container>
      <div className="project-gallery grid gap-12 md:gap-x-3 md:gap-y-8 md:pb-24">
        {entries.map((project, index) => (
          <ProjectPreview
            key={project.slug}
            project={project}
            offset={index % 3 !== 1}
          />
        ))}
      </div>
    </section>
  );
}
