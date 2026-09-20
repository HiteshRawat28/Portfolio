import type { Decision } from "@/lib/types";
export function ArchitectureDiagram({
  steps,
  name,
}: {
  steps: Decision[];
  name: string;
}) {
  return (
    <figure>
      <figcaption className="eyebrow mb-5 text-secondary">
        {name} / architecture overview, not a product screenshot
      </figcaption>
      <ol className="grid gap-3 sm:grid-cols-2">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="editorial-card min-w-0 rounded-media p-5"
          >
            <p className="font-mono text-xs text-accent">
              {String(i + 1).padStart(2, "0")} / {step.title}
            </p>
            <p className="mt-3 text-sm text-secondary">{step.detail}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
