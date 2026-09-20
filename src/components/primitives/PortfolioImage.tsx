import Image from "next/image";
import type { ProjectMedia } from "@/lib/types";

export function PortfolioImage({
  media,
  label,
  aspect = "landscape",
  className = "",
}: {
  media?: ProjectMedia | null;
  label: string;
  aspect?: "landscape" | "portrait" | "square" | "project";
  className?: string;
}) {
  const ratio = {
    landscape: "aspect-landscape",
    portrait: "aspect-portrait",
    square: "aspect-square",
    project: "aspect-project",
  }[aspect];
  return (
    <div
      className={`relative overflow-hidden rounded-media border border-border bg-surface-elevated ${ratio} ${className}`}
    >
      {media ? (
        <>
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width}
            height={media.height}
            sizes={
              aspect === "project"
                ? "(min-width: 768px) 35vw, 100vw"
                : "(min-width: 1024px) 50vw, 100vw"
            }
            className={`h-full w-full ${aspect === "project" ? "object-contain" : "object-cover"}`}
          />
          <p className="absolute right-3 bottom-3 max-w-[calc(100%_-_1.5rem)] rounded-full border border-border bg-black/80 px-3 py-1.5 text-[0.65rem] text-secondary backdrop-blur-sm">
            {media.caption}
          </p>
        </>
      ) : (
        <div className="absolute inset-0 flex items-end p-5">
          <p className="text-xs text-secondary">{label} · image pending</p>
        </div>
      )}
    </div>
  );
}
