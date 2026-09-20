import { ProjectMeta } from "@/components/primitives/ProjectMeta";
import { projects } from "@/content/projects";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { TextLink } from "@/components/primitives/TextLink";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata(
  "Projects",
  "Six inspectable projects across business systems and practical AI applications, with honest technical trade-offs.",
  "/projects",
);
export default function ProjectsPage() {
  return (
    <Container className="section-space">
      <p className="eyebrow text-accent">Work / six projects</p>
      <Heading level={1} className="mt-6">
        Business workflows, end to end.
      </Heading>
      <Text className="mt-6 text-lg">
        A source-backed view of what each system does, how it makes decisions,
        and what remains unverified.
      </Text>
      <div className="mt-12 divide-y divide-border">
        {projects.map((p, i) => (
          <article
            id={p.slug}
            key={p.slug}
            className="grid gap-6 py-8 md:grid-cols-[4rem_1fr]"
          >
            <p className="font-mono text-sm text-secondary">
              {String(i + 1).padStart(2, "0")}
            </p>
            <div>
              <Heading level={2}>
                <TextLink
                  href={`/projects/${p.slug}`}
                  className="text-primary no-underline"
                >
                  {p.name}
                </TextLink>
              </Heading>
              <Text className="mt-4">{p.shortDescription}</Text>
              <p className="mt-4 text-sm text-secondary">
                {p.collaborationType}
              </p>
              <div className="mt-5">
                <ProjectMeta project={p} />
              </div>
              <Text className="mt-5 text-sm">{p.outcomes[0]}</Text>
              <div className="mt-4 flex flex-wrap gap-6">
                <TextLink href={`/projects/${p.slug}`}>
                  Read {p.name} case study
                </TextLink>
                <TextLink href={p.repositoryUrl} external>
                  Inspect {p.name} repository
                </TextLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
