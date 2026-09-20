import Link from "next/link";
import { getProject } from "@/content/projects";
import { TextLink } from "../primitives/TextLink";

export function AILab() {
  return (
    <section id="ai-lab" className="mt-16 border-t border-border pt-8">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="eyebrow text-ai-accent">Applied AI / controls</p>
          <h2 className="mt-3 text-3xl font-normal md:text-4xl">
            How the AI stays controlled.
          </h2>
          <p className="mt-4 max-w-2xl text-secondary">
            The task, permissions, human approval, evaluation status, and
            current limitations remain explicit in every project.
          </p>
        </div>
        <TextLink href="/focus/ai-applications" className="text-sm">
          Explore the AI work
        </TextLink>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {["fleetpilot", "personal-ops-agent", "ai-guardrails"].map((slug) => {
          const project = getProject(slug),
            ai = project?.ai;
          return project && ai ? (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className="feedback group block rounded-media border border-border bg-surface-elevated p-6 text-primary hover:-translate-y-1 hover:border-ai-accent hover:shadow-frame"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow text-ai-accent">
                  {slug === "fleetpilot"
                    ? "Copilot"
                    : slug === "personal-ops-agent"
                      ? "Tool use"
                      : "Guardrails"}
                </p>
                <span
                  aria-hidden="true"
                  className="inline-flex size-7 items-center justify-center rounded-full border border-ai-accent/30 text-ai-accent"
                >
                  →
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-normal">
                {project.name}
                {slug === "fleetpilot" ? " Copilot" : ""}
              </h3>
              <dl className="mt-6 grid gap-4 border-t border-border pt-5 text-sm">
                {[
                  ["Task", ai.task],
                  ["Permissions", ai.permissions],
                  ["Human control", ai.humanApproval],
                  ["Evaluation", ai.evaluation],
                  ["Limitation", ai.limitations],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="eyebrow text-secondary">{label}</dt>
                    <dd className="mt-1 text-secondary">{value}</dd>
                  </div>
                ))}
              </dl>
            </Link>
          ) : null;
        })}
      </div>
    </section>
  );
}
