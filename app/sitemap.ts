import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://hitesh-rawat-portfolio.shashvatz05.chatgpt.site";
const lastModified = new Date("2026-09-16T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/focus/full-stack", "/focus/ai-applications", "/about", "/resume", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...projects.map((project) => ({ url: `${baseUrl}/projects/${project.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
