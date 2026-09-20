import { capabilities } from "@/content/capabilities";
import { designMedia } from "@/content/design-media";
import { Section } from "../primitives/Section";
import { Grid } from "../primitives/Grid";
import { PortfolioImage } from "../primitives/PortfolioImage";
import { Button } from "../primitives/Button";
import { Tag } from "../primitives/Tag";
import { AILab } from "./AILab";

export function Capabilities() {
  return (
    <Section id="capabilities">
      <Grid>
        <div>
          <p className="section-badge">Technical capabilities</p>
          <h2 className="mt-6 text-section font-normal">Capabilities.</h2>
          <p className="mt-7 text-lg text-secondary">
            Interfaces, APIs, data and AI integrations that work together inside
            a real application.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {capabilities.map((c) => (
              <Tag key={c.title}>{c.title}</Tag>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
            <Button href="/contact">Get in touch</Button>
            <Button href="/focus/full-stack" variant="secondary">
              Full-stack focus
            </Button>
          </div>
        </div>
        <PortfolioImage
          media={designMedia.capabilities}
          label="Technical work"
          aspect="landscape"
        />
      </Grid>
      <div className="mt-12 grid gap-x-16 gap-y-8 md:grid-cols-2">
        {capabilities.map((c) => (
          <article key={c.title} className="border-t border-border pt-6">
            <h3 className="text-3xl font-normal">{c.title}</h3>
            <p className="mt-4 text-secondary">{c.description}</p>
            <p className="mt-4 text-sm text-secondary">{c.tools.join(" / ")}</p>
          </article>
        ))}
      </div>
      <AILab />
    </Section>
  );
}
