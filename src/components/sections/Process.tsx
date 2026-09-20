import { processSteps } from "@/content/process";
import { designMedia } from "@/content/design-media";
import { Section } from "../primitives/Section";
import { Grid } from "../primitives/Grid";
import { PortfolioImage } from "../primitives/PortfolioImage";
import { Button } from "../primitives/Button";

export function Process() {
  return (
    <Section id="process">
      <Grid>
        <PortfolioImage
          media={designMedia.process}
          label="Engineering workflow"
          aspect="portrait"
          className="hidden lg:block lg:sticky lg:top-28"
        />
        <div>
          <p className="section-badge">Engineering workflow</p>
          <h2 className="mt-6 text-section font-normal">Process.</h2>
          <p className="mt-7 text-lg text-secondary">
            A practical approach from the first requirement to a verified,
            documented implementation.
          </p>
          <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row">
            <Button href="/contact">Get in touch</Button>
            <Button href="#selected-work" variant="secondary">
              See projects
            </Button>
          </div>
          <ol className="mt-10 grid gap-6">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-media border border-border bg-surface p-7 md:p-9"
              >
                <div className="flex justify-between gap-6">
                  <h3 className="max-w-sm text-3xl font-normal">
                    {step.title}
                  </h3>
                  <span className="text-sm text-secondary">{index + 1}</span>
                </div>
                <p className="mt-7 border-t border-border pt-6 text-secondary">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Grid>
    </Section>
  );
}
