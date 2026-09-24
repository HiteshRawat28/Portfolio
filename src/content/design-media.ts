import type { ProjectMedia } from "@/lib/types";

// Keep the portrait genuine. Supporting illustrations are labelled concepts, not product evidence.
export const designMedia: {
  portrait: ProjectMedia | null;
  process: ProjectMedia | null;
  capabilities: ProjectMedia | null;
} = {
  portrait: {
    src: "/media/portrait/hitesh-rawat.webp",
    alt: "Portrait of Hitesh Rawat",
    width: 1000,
    height: 1250,
    caption: "Hitesh Rawat · Jaipur, India",
  },
  process: {
    src: "/media/generated/engineering-process-ui-v2.webp",
    alt: "Editorial interface illustration showing requirements, implementation and verification connected as an engineering workflow",
    width: 1122,
    height: 1402,
    caption: "AI-generated engineering workflow illustration.",
  },
  capabilities: {
    src: "/media/generated/technical-capabilities-ui-v2.webp",
    alt: "Editorial architecture interface connecting user interfaces, application services, data, security, observability and AI",
    width: 1448,
    height: 1086,
    caption: "AI-generated full-stack architecture illustration.",
  },
};
