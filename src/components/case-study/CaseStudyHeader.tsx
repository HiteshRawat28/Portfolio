import type { Project } from "@/lib/types";
import { Container } from "../primitives/Container";
import { Heading } from "../primitives/Heading";
import { Text } from "../primitives/Text";
import { TextLink } from "../primitives/TextLink";
export function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <div className="border-b border-border bg-surface py-12 md:py-20">
      <Container>
        <TextLink href="/projects" className="text-sm">
          All projects
        </TextLink>
        <p className="eyebrow mt-6 text-accent">
          Project evidence / {project.collaborationType}
        </p>
        <Heading level={1} className="mt-5 max-w-4xl">
          {project.name}
        </Heading>
        <Text className="mt-7 max-w-[60ch] text-lg md:text-xl">
          {project.shortDescription}
        </Text>
        <dl className="mt-8 grid max-w-5xl gap-5 border-y border-border py-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="eyebrow text-secondary">My role</dt>
            <dd className="mt-2 text-sm">{project.role}</dd>
          </div>
          <div>
            <dt className="eyebrow text-secondary">Ownership</dt>
            <dd className="mt-2 text-sm">{project.collaborationType}</dd>
          </div>
          <div>
            <dt className="eyebrow text-secondary">Core stack</dt>
            <dd className="mt-2 text-sm">
              {project.technologies.slice(0, 4).join(" · ")}
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-secondary">Current evidence</dt>
            <dd className="mt-2 text-sm">
              {project.liveUrl
                ? "Repository and linked demo"
                : "Repository; no verified public demo"}
            </dd>
          </div>
        </dl>
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
