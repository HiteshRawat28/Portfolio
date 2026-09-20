import type { Metadata } from "next";
import type { Viewport } from "next";
import { buildMetadata } from "@/lib/metadata";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipLink } from "@/components/layout/SkipLink";
const sans = localFont({
  src: [
    {
      path: "../assets/satoshi/satoshi-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/satoshi/satoshi-500.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-portfolio-sans",
});
export const metadata: Metadata = buildMetadata(
  "Hitesh Rawat — Full-Stack and AI Applications Engineer",
  "Full-stack software engineer building secure, multi-tenant business systems and practical AI applications.",
  "/",
);
export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} font-sans antialiased`}>
        <SkipLink />
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
