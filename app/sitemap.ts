import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://hitesh-rawat-portfolio.shashvatz05.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/focus/full-stack", "/focus/ai-applications", "/about", "/resume", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8 })),
    ...projects.map((project) => ({ url: `${baseUrl}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
