import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hitesh-rawat-portfolio.shashvatz05.chatgpt.site"),
  title: {
    default: "Hitesh Rawat — Full-Stack & AI Applications Engineer",
    template: "%s — Hitesh Rawat",
  },
  description:
    "Portfolio of Hitesh Rawat, a full-stack software engineer building multi-tenant business systems and practical AI applications.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hitesh Rawat — Full-Stack & AI Applications Engineer",
    description: "Full-stack business systems, multi-tenant products, and practical AI applications.",
    type: "website",
    url: "/",
    siteName: "Hitesh Rawat",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Hitesh Rawat — Full-Stack & AI Applications Engineer",
    description: "Full-stack business systems, multi-tenant products, and practical AI applications.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
