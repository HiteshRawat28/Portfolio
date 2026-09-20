import { designMedia } from "@/content/design-media";
import { Section } from "../primitives/Section";
import { Grid } from "../primitives/Grid";
import { PortfolioImage } from "../primitives/PortfolioImage";
import { TextLink } from "../primitives/TextLink";

const principles = [
  {
    title: "Put operational rules behind the API boundary.",
    detail:
      "FleetPilot checks stored sessions, roles, organization scope, and dispatch eligibility before a confirmed draft is written.",
    href: "/projects/fleetpilot#decisions",
    link: "See the FleetPilot decision",
  },
  {
    title: "Treat related data changes as one operation.",
    detail:
      "SwiftBill coordinates the sale, line items, stock movement, and party balance inside a database transaction.",
    href: "/projects/swiftbill#data",
    link: "See the SwiftBill data flow",
  },
  {
    title: "Keep AI actions bounded and reviewable.",
    detail:
      "Personal Ops Agent pauses calendar mutations for explicit confirmation and exposes tool execution for inspection.",
    href: "/projects/personal-ops-agent#integrations",
    link: "See the agent controls",
  },
] as const;

export function Process() {
  return (
    <Section id="approach">
      <Grid>
        <PortfolioImage
          media={designMedia.process}
          label="Engineering workflow"
          aspect="portrait"
          className="hidden lg:block lg:sticky lg:top-28"
        />
        <div>
          <p className="eyebrow text-accent">Engineering approach</p>
          <h2 className="mt-6 text-section font-normal">
            Principles tied to shipped code.
          </h2>
          <p className="mt-7 text-lg text-secondary">
            The case studies show the implementation evidence and the limits of
            what has been verified.
          </p>
          <ol className="mt-10 grid gap-6">
            {principles.map((principle, index) => (
              <li
                key={principle.title}
                className="editorial-card rounded-media p-7 md:p-9"
              >
                <div className="flex justify-between gap-6">
                  <h3 className="max-w-sm text-3xl font-normal">
                    {principle.title}
                  </h3>
                  <span className="eyebrow text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-7 border-t border-border pt-6 text-secondary">
                  {principle.detail}
                </p>
                <TextLink href={principle.href} className="mt-5 text-sm">
                  {principle.link}
                </TextLink>
              </li>
            ))}
          </ol>
        </div>
      </Grid>
    </Section>
  );
}
