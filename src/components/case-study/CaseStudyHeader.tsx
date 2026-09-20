import type { Project } from "@/lib/types";
import { Container } from "../primitives/Container";
import { Heading } from "../primitives/Heading";
import { Text } from "../primitives/Text";
import { TextLink } from "../primitives/TextLink";
import { ProjectMeta } from "../primitives/ProjectMeta";
export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <div className="border-b border-border py-12 md:py-16">
      <Container>
        <TextLink href="/projects" className="text-sm">
          ← All projects
        </TextLink>
        <p className="eyebrow mt-6 text-accent">
          Case study / {project.collaborationType}
        </p>
        <Heading level={1} className="mt-4 text-4xl md:text-5xl">
          {project.name}
        </Heading>
        <Text className="mt-6 max-w-[60ch] text-lg">
          {project.shortDescription}
        </Text>
        <p className="mt-5 text-sm">{project.role}</p>
        <div className="mt-6">
          <ProjectMeta project={project} />
        </div>
        <div className="mt-6 flex flex-wrap gap-6">
          <TextLink href={project.repositoryUrl} external>
            Inspect {project.name} source
          </TextLink>
          {project.liveUrl && (
            <TextLink href={project.liveUrl} external>
              Open {project.name} demo
            </TextLink>
          )}
        </div>
        {project.slug === "dealos" && (
          <p className="mt-6 max-w-3xl border-l-2 border-border-strong pl-4 text-sm text-secondary">
            Team-built at Odoo Hackathon 2026. The system analysis below
            describes the shared repository; it does not imply sole authorship.
          </p>
        )}
        {project.slug === "swiftbill" && (
          <p className="mt-6 max-w-3xl border-l-2 border-border-strong pl-4 text-sm text-secondary">
            Educational tax logic—not certified accounting or tax software.
          </p>
        )}
        <p className="mt-6 text-xs text-secondary">
          Evidence checked 16 September 2026 · source/test presence inspected;
          showcased project tests not executed.
        </p>
      </Container>
    </div>
  );
}
