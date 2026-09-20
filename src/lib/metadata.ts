import type { Metadata } from "next";
function getSiteOrigin(): string {
  try {
    const url = new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    );
    return ["https:", "http:"].includes(url.protocol)
      ? url.origin
      : "http://localhost:3000";
  } catch {
    return "http://localhost:3000";
  }
}
export const siteOrigin = getSiteOrigin();
export function buildMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle =
    title === "Hitesh Rawat — Full-Stack and AI Applications Engineer"
      ? title
      : `${title} — Hitesh Rawat`;
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteOrigin),
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: "Hitesh Rawat",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/og-default.png",
          width: 1200,
          height: 630,
          alt: "Hitesh Rawat — Full-stack systems and practical AI applications",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-default.png"],
    },
  };
}
