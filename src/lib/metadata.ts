import type { Metadata } from "next";
const localOrigin = "http://localhost:3000";
function toOrigin(value: string | undefined): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    return ["https:", "http:"].includes(url.protocol) ? url.origin : null;
  } catch {
    return null;
  }
}
// An explicit origin wins; Vercel's production hostname keeps canonicals off localhost when it is unset.
export function resolveSiteOrigin(
  env: Record<string, string | undefined>,
): string {
  const vercelHost = env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  return (
    toOrigin(env.NEXT_PUBLIC_SITE_URL) ??
    (vercelHost ? toOrigin(`https://${vercelHost}`) : null) ??
    localOrigin
  );
}
export const siteOrigin = resolveSiteOrigin(process.env);
export function buildMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = title.startsWith("Hitesh Rawat")
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
          alt: "Hitesh Rawat — Software engineer building full-stack products and practical AI applications",
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
