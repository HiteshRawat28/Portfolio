import { Heading } from "../primitives/Heading";
export function CaseStudySection({
  number,
  id,
  title,
  children,
}: {
  number: number;
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="grid gap-5 border-t border-border py-12 lg:grid-cols-[3rem_15rem_1fr] lg:gap-10"
    >
      <p className="eyebrow text-accent" aria-hidden="true">
        {String(number).padStart(2, "0")}
      </p>
      <Heading id={`${id}-heading`} level={2} className="text-2xl">
        {title}
      </Heading>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
