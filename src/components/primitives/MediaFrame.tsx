import Image from "next/image";
import type { ProjectMedia } from "@/lib/types";
export function MediaFrame({
  media,
  priority = false,
}: {
  media: ProjectMedia;
  priority?: boolean;
}) {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-media border border-border bg-surface-elevated shadow-frame">
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          priority={priority}
          sizes="(min-width: 1024px) 700px, (min-width: 768px) 90vw, 100vw"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 font-mono text-xs text-secondary">
        {media.caption}
      </figcaption>
    </figure>
  );
}
