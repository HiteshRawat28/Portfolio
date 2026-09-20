import { profile } from "@/content/profile";
import { capabilities } from "@/content/capabilities";
import { experience } from "@/content/experience";
import { designMedia } from "@/content/design-media";
import { Section } from "../primitives/Section";
import { Grid } from "../primitives/Grid";
import { PortfolioImage } from "../primitives/PortfolioImage";
import { TextLink } from "../primitives/TextLink";
import { Tag } from "../primitives/Tag";

export function About() {
  return (
    <Section id="about-me">
      <Grid>
        <div>
          <h2 className="text-section font-normal">Meet Hitesh.</h2>
          <p className="mt-8 text-lg text-secondary">{profile.bio}</p>
          <div className="mt-8 flex flex-wrap gap-3 border-y border-border py-7">
            {capabilities.map((c) => (
              <Tag key={c.title}>{c.title}</Tag>
            ))}
          </div>
          <dl className="mt-8 divide-y divide-border text-sm">
            {[
              ["Education", profile.education, profile.educationPeriod],
              ...experience.map((entry) => [
                entry.label,
                entry.detail,
                entry.period,
              ]),
            ].map(([label, detail, period]) => (
              <div
                key={label}
                className="grid gap-2 py-5 sm:grid-cols-[1fr_2fr]"
              >
                <dt className="text-primary">{label}</dt>
                <dd className="text-secondary">
                  {detail}
                  <span className="mt-2 block text-xs">{period}</span>
                </dd>
              </div>
            ))}
          </dl>
          <TextLink href="/about" className="mt-6">
            More about Hitesh
          </TextLink>
        </div>
        <PortfolioImage
          media={designMedia.portrait}
          label="Hitesh's portrait"
          aspect="portrait"
        />
      </Grid>
    </Section>
  );
}
