import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteOrigin } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/projects",
    "/focus/full-stack",
    "/focus/ai-applications",
    "/about",
    "/resume",
    "/contact",
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({ url: siteOrigin + path }));
}
