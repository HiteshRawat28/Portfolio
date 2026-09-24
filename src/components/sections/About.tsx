import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { Section } from "../primitives/Section";
import { TextLink } from "../primitives/TextLink";
import { ProfilePortrait } from "./ProfilePortrait";

export function About() {
  return (
    <Section id="experience">
      <div className="grid gap-10 md:grid-cols-12 lg:gap-10">
        <div className="md:col-span-7 lg:col-span-4">
          <p className="eyebrow text-accent">Experience & education</p>
          <h2 className="mt-5 text-section font-normal">
            Learning, building, and working with teams.
          </h2>
          <p className="mt-7 text-lg text-secondary">{profile.bio}</p>
          <TextLink href="/about" className="mt-6">
            More about me
          </TextLink>
        </div>
        <div className="md:col-span-5 md:self-end lg:col-span-3">
          <ProfilePortrait />
        </div>
        <dl className="divide-y divide-border border-y border-border md:col-span-12 lg:col-span-5">
          {[
            ["Education", profile.education, profile.educationPeriod],
            ...experience.map((entry) => [
              entry.label,
              entry.detail,
              entry.period,
            ]),
            ["Problem solving", profile.problemSolving, "Ongoing practice"],
          ].map(([label, detail, period]) => (
            <div
              key={label}
              className="grid gap-3 py-6 sm:grid-cols-[10rem_1fr]"
            >
              <dt className="eyebrow text-secondary">{label}</dt>
              <dd>
                <span className="block text-lg">{detail}</span>
                <span className="mt-2 block text-sm text-secondary">
                  {period}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
