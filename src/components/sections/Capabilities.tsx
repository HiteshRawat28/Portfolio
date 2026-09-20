import { capabilities } from "@/content/capabilities";
import { designMedia } from "@/content/design-media";
import { getProject } from "@/content/projects";
import { Section } from "../primitives/Section";
import { Grid } from "../primitives/Grid";
import { PortfolioImage } from "../primitives/PortfolioImage";
import { TextLink } from "../primitives/TextLink";
import { AILab } from "./AILab";

const evidenceByCapability: Record<string, readonly string[]> = {
  "Product interfaces": ["fleetpilot", "assetflow"],
  "Backend & APIs": ["fleetpilot", "swiftbill"],
  "Data & consistency": ["swiftbill", "assetflow"],
  "AI applications": ["personal-ops-agent", "ai-guardrails"],
  "Engineering foundations": ["fleetpilot", "dealos"],
};

export function Capabilities() {
  return (
    <Section id="skills">
      <Grid>
        <div>
          <p className="eyebrow text-accent">Skills & tools</p>
          <h2 className="mt-6 text-section font-normal">
            Technology, shown in context.
          </h2>
          <p className="mt-7 text-lg text-secondary">
            Each group links back to projects where the tools and decisions can
            be inspected.
          </p>
          <div className="mt-7 flex flex-wrap gap-6">
            <TextLink href="/focus/full-stack">Full-stack work</TextLink>
            <TextLink href="/focus/ai-applications">Applied AI work</TextLink>
          </div>
        </div>
        <PortfolioImage
          media={designMedia.capabilities}
          label="Technical work"
          aspect="landscape"
        />
      </Grid>
      <div className="mt-12 grid gap-x-16 gap-y-8 md:grid-cols-2">
        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="craft-rule border-t border-border py-6 pl-5"
          >
            <h3 className="text-3xl font-normal">{capability.title}</h3>
            <p className="mt-4 text-secondary">{capability.description}</p>
            <p className="mt-4 text-sm text-secondary">
              {capability.tools.join(" / ")}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
              {(evidenceByCapability[capability.title] ?? []).flatMap(
                (slug) => {
                  const project = getProject(slug);
                  return project
                    ? [
                        <TextLink
                          key={project.slug}
                          href={`/projects/${project.slug}`}
                          className="text-sm"
                        >
                          {project.name}
                        </TextLink>,
                      ]
                    : [];
                },
              )}
            </div>
          </article>
        ))}
      </div>
      <AILab />
    </Section>
  );
}
