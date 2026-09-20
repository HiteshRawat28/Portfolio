import type { ProjectMedia } from "@/lib/types";

// Keep the portrait genuine. Supporting illustrations are transparent concept art, not product evidence.
export const designMedia: {
  portrait: ProjectMedia | null;
  process: ProjectMedia | null;
  capabilities: ProjectMedia | null;
} = {
  portrait: null,
  process: {
    src: "/media/generated/engineering-process.webp",
    alt: "Monochrome concept illustration of discovery, implementation, testing and refinement",
    width: 1122,
    height: 1402,
    caption: "AI-generated engineering-process concept visual.",
  },
  capabilities: {
    src: "/media/generated/technical-capabilities.webp",
    alt: "Monochrome concept illustration connecting interfaces, APIs, data, security and AI",
    width: 1448,
    height: 1086,
    caption: "AI-generated full-stack architecture concept visual.",
  },
};
