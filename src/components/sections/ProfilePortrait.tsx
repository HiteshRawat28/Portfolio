import Image from "next/image";
import { designMedia } from "@/content/design-media";

export function ProfilePortrait() {
  const portrait = designMedia.portrait;

  return (
    <figure className="w-full max-w-xs">
      <div className="relative aspect-portrait overflow-hidden rounded-media border border-border bg-surface-elevated">
        {portrait ? (
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 34vw, 320px"
            className="h-full w-full object-cover saturate-75 contrast-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-5">
            <p className="text-xs text-secondary">Portrait pending</p>
          </div>
        )}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-accent/10 mix-blend-soft-light"
        />
        <span
          aria-hidden="true"
          className="absolute right-0 bottom-0 size-5 bg-accent"
        />
      </div>
      <figcaption className="mt-4 border-t border-border pt-4 text-sm text-secondary">
        {portrait?.caption}
      </figcaption>
    </figure>
  );
}
