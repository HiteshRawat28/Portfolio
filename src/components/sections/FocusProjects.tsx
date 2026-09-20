import { getProject } from "@/content/projects";
import { Heading } from "../primitives/Heading";
import { Text } from "../primitives/Text";
import { TextLink } from "../primitives/TextLink";
import { ProjectMeta } from "../primitives/ProjectMeta";
export function FocusProjects({
  order,
  ai = false,
}: {
  order: readonly string[];
  ai?: boolean;
}) {
  return (
    <div className="mt-12 divide-y divide-border">
      {order.map((slug, i) => {
        const p = getProject(slug);
        if (!p) return null;
        const controls = ai ? p.ai : undefined;
        return (
          <article
            key={slug}
            className="grid gap-6 py-10 lg:grid-cols-[3rem_1fr_1.7fr]"
          >
            <p
              className={`font-mono text-xs ${ai ? "text-ai-accent" : "text-accent"}`}
            >
              {String(i + 1).padStart(2, "0")} / {controls ? "AI" : "SYS"}
            </p>
            <div>
              <Heading level={2} className="text-2xl">
                {p.name}
                {controls && slug === "fleetpilot" ? " / Copilot" : ""}
              </Heading>
              <div className="mt-5">
                <ProjectMeta project={p} />
              </div>
              <TextLink href={`/projects/${p.slug}`} className="mt-5">
                Read {p.name} case study
              </TextLink>
            </div>
            <div>
              <Text className="text-lg">{p.shortDescription}</Text>
              {controls ? (
                <dl className="mt-6 grid gap-5 text-sm">
                  {[
                    [
                      "Task & provider",
                      `${controls.task} Provider: ${controls.provider}.`,
                    ],
                    ["Tool permissions", controls.permissions],
                    ["Human approval", controls.humanApproval],
                    ["Guardrails", controls.guardrails],
                    ["Observability", controls.observability],
                    ["Failure handling", controls.failureHandling],
                    ["Evaluation status", controls.evaluation],
                    ["Limitations", controls.limitations],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-medium text-primary">{label}</dt>
                      <dd className="mt-1 text-secondary">{value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <div className="mt-5 grid gap-4">
                  <Text>{p.technicalDecisions[0]?.detail}</Text>
                  <Text className="text-sm">{p.security[0]}</Text>
                  <Text className="text-sm">{p.testing[0]}</Text>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
