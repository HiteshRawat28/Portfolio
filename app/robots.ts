import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://hitesh-rawat-portfolio.shashvatz05.chatgpt.site/sitemap.xml",
  };
}
