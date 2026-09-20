import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/primitives/Container";
import { Text } from "@/components/primitives/Text";
import { TextLink } from "@/components/primitives/TextLink";
import { MediaFrame } from "@/components/primitives/MediaFrame";
import { CaseStudyHeader } from "@/components/case-study/CaseStudyHeader";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { DecisionList } from "@/components/case-study/DecisionList";
import { LimitationsList } from "@/components/case-study/LimitationsList";
// Known studies stay pre-rendered; unknown slugs use notFound instead of Next 15's NoFallbackError path.
export const dynamicParams = true;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  return buildMetadata(
    `${p.name} case study`,
    p.shortDescription,
    `/projects/${p.slug}`,
  );
}
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="prose-list text-secondary">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const media = p.media[0];
  const sections = [
    {
      id: "summary",
      title: "Summary",
      content: <Text className="text-lg">{p.fullSummary}</Text>,
    },
    { id: "problem", title: "The problem", content: <Text>{p.problem}</Text> },
    {
      id: "users",
      title: "Users & roles",
      content: <BulletList items={p.users} />,
    },
    {
      id: "contribution",
      title: "My contribution",
      content: <BulletList items={p.responsibilities} />,
    },
    {
      id: "constraints",
      title: "Constraints",
      content: <BulletList items={p.constraints} />,
    },
    {
      id: "architecture",
      title: "Architecture",
      content: (
        <div className="grid gap-8">
          <ArchitectureDiagram steps={p.architecture} name={p.name} />
          {media && <MediaFrame media={media} />}
        </div>
      ),
    },
    {
      id: "decisions",
      title: "Technical decisions",
      content: <DecisionList decisions={p.technicalDecisions} />,
    },
    {
      id: "security",
      title: "Authentication & authorization",
      content: <BulletList items={p.security} />,
    },
    {
      id: "data",
      title: "Data & transactions",
      content: <BulletList items={p.dataFlow} />,
    },
    {
      id: "integrations",
      title: "Integrations",
      content: (
        <div>
          <BulletList items={p.integrations} />
          {p.ai && (
            <dl className="mt-8 grid gap-5 border-t border-border pt-6">
              {[
                ["Task", p.ai.task],
                ["Provider", p.ai.provider],
                ["Tool permissions", p.ai.permissions],
                ["Human approval", p.ai.humanApproval],
                ["Guardrails", p.ai.guardrails],
                ["Observability", p.ai.observability],
                ["Failure handling", p.ai.failureHandling],
                ["Evaluation", p.ai.evaluation],
                ["AI limitations", p.ai.limitations],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-medium">{label}</dt>
                  <dd className="mt-1 text-secondary">{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      ),
    },
    {
      id: "testing",
      title: "Testing & evaluation",
      content: <BulletList items={p.testing} />,
    },
    {
      id: "deployment",
      title: "Deployment status",
      content: <BulletList items={p.deployment} />,
    },
    {
      id: "outcomes",
      title: "Verifiable outcomes",
      content: <BulletList items={p.outcomes} />,
    },
    {
      id: "limitations",
      title: "Limitations",
      content: <LimitationsList items={p.limitations} />,
    },
    {
      id: "next-steps",
      title: "Next steps",
      content: <BulletList items={p.nextSteps} />,
    },
    {
      id: "links",
      title: "Source & next reading",
      content: (
        <div className="flex flex-col items-start gap-3">
          <TextLink href={p.repositoryUrl} external>
            Inspect {p.name} repository
          </TextLink>
          {p.liveUrl && (
            <TextLink href={p.liveUrl} external>
              Open {p.name} demo
            </TextLink>
          )}
          <TextLink
            href={
              p.categories.includes("ai")
                ? "/focus/ai-applications"
                : "/focus/full-stack"
            }
          >
            Explore related engineering work
          </TextLink>
          <TextLink href="/contact">Discuss this project with Hitesh</TextLink>
        </div>
      ),
    },
  ];
  return (
    <>
      <CaseStudyHeader project={p} />
      <Container>
        <nav
          aria-label="Case study shortcuts"
          className="flex flex-wrap gap-x-6 border-b border-border py-5"
        >
          {[
            "decisions",
            "security",
            "data",
            "testing",
            "limitations",
            "next-steps",
          ].map((id) => (
            <TextLink key={id} href={`#${id}`} className="text-sm">
              {sections.find((s) => s.id === id)?.title}
            </TextLink>
          ))}
        </nav>
        {sections.map((s, i) => (
          <CaseStudySection key={s.id} number={i + 1} id={s.id} title={s.title}>
            {s.content}
          </CaseStudySection>
        ))}
      </Container>
    </>
  );
}
