import type { Metadata } from "next";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const socialTitle = `${title} — Hitesh Rawat`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      type: "website",
      url: path,
      siteName: "Hitesh Rawat",
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}
