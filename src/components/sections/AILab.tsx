import { getProject } from "@/content/projects";
import { TextLink } from "../primitives/TextLink";

export function AILab() {
  return (
    <details
      id="ai-lab"
      className="mt-12 rounded-media border border-border bg-surface p-6 md:p-8"
    >
      <summary className="min-h-11 cursor-pointer text-xl">
        AI application boundaries and evaluation
      </summary>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {["fleetpilot", "personal-ops-agent", "ai-guardrails"].map((slug) => {
          const project = getProject(slug),
            ai = project?.ai;
          return project && ai ? (
            <article key={slug}>
              <h3 className="text-2xl font-normal">
                {project.name}
                {slug === "fleetpilot" ? " Copilot" : ""}
              </h3>
              <dl className="mt-5 grid gap-4 text-sm">
                {[
                  ["Task", ai.task],
                  ["Provider", ai.provider],
                  ["Permissions", ai.permissions],
                  ["Human approval", ai.humanApproval],
                  ["Guardrails", ai.guardrails],
                  ["Observability", ai.observability],
                  ["Failure handling", ai.failureHandling],
                  ["Evaluation", ai.evaluation],
                  ["Limitations", ai.limitations],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-medium">{label}</dt>
                    <dd className="mt-1 text-secondary">{value}</dd>
                  </div>
                ))}
              </dl>
              <TextLink href={`/projects/${slug}`} className="mt-5">
                Full case study
              </TextLink>
            </article>
          ) : null;
        })}
      </div>
      <TextLink href="/focus/ai-applications" className="mt-8">
        AI applications focus
      </TextLink>
    </details>
  );
}
