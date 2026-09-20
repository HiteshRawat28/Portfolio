import type { Project } from "@/lib/types";
import { Tag } from "./Tag";
export function ProjectMeta({ project }: { project: Project }) {
  return (
    <div>
      <p className="font-mono text-xs text-secondary">
        {project.collaborationType}
      </p>
      <ul
        aria-label={`${project.name} technology stack`}
        className="mt-4 flex flex-wrap gap-2"
      >
        {project.technologies.slice(0, 5).map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}
