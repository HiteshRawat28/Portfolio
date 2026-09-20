import Link from "next/link";
import { ProjectMeta } from "@/components/primitives/ProjectMeta";
import { projects } from "@/content/projects";
import { Container } from "@/components/primitives/Container";
import { Heading } from "@/components/primitives/Heading";
import { Text } from "@/components/primitives/Text";
import { TextLink } from "@/components/primitives/TextLink";
import { PortfolioImage } from "@/components/primitives/PortfolioImage";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata(
  "Projects",
  "Hitesh Rawat's six inspectable projects across full-stack systems and practical AI applications, with roles and limitations made explicit.",
  "/projects",
);
export default function ProjectsPage() {
  return (
    <Container className="section-space">
      <p className="eyebrow text-accent">Work / six projects</p>
      <Heading level={1} className="mt-6">
        Projects, decisions, and engineering evidence.
      </Heading>
      <Text className="mt-6 text-lg">
        My portfolio spans operational systems, transactional workflows, and
        bounded AI experiments. Each entry states my role, a representative
        decision, and what remains unverified.
      </Text>
      <div className="mt-6 flex flex-wrap gap-6">
        <TextLink href="/focus/full-stack">View full-stack work</TextLink>
        <TextLink href="/focus/ai-applications">View applied AI work</TextLink>
      </div>
      <div className="mt-12 divide-y divide-border border-t border-border">
        {projects.map((p, i) => (
          <article
            id={p.slug}
            key={p.slug}
            className="grid gap-6 py-10 md:grid-cols-12 md:items-start"
          >
            <p className="eyebrow text-secondary md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </p>
            <div className="md:col-span-5">
              <Heading level={2}>
                <TextLink
                  href={`/projects/${p.slug}`}
                  className="text-primary no-underline"
                >
                  {p.name}
                </TextLink>
              </Heading>
              <Text className="mt-4">{p.shortDescription}</Text>
              <p className="mt-4 text-sm font-medium">{p.role}</p>
              <div className="mt-5">
                <ProjectMeta project={p} />
              </div>
              <div className="mt-6 border-y border-border py-5">
                <p className="eyebrow text-accent">Representative decision</p>
                <p className="mt-3 font-medium">
                  {p.technicalDecisions[0]?.title}
                </p>
                <Text className="mt-2 text-sm">
                  {p.technicalDecisions[0]?.detail}
                </Text>
              </div>
              <Text className="mt-5 text-sm">
                <span className="font-medium text-primary">Known limit: </span>
                {p.limitations[0]}
              </Text>
              <div className="mt-4 flex flex-wrap gap-6">
                <TextLink href={`/projects/${p.slug}`}>
                  Read {p.name} case study
                </TextLink>
                <TextLink href={p.repositoryUrl} external>
                  Inspect {p.name} repository
                </TextLink>
              </div>
            </div>
            <Link
              href={`/projects/${p.slug}`}
              aria-label={`Read ${p.name} case study`}
              className="group block rounded-media md:col-span-6"
            >
              <PortfolioImage
                media={p.media[0]}
                label={`${p.name} concept visual`}
                aspect="landscape"
              />
            </Link>
          </article>
        ))}
      </div>
    </Container>
  );
}
