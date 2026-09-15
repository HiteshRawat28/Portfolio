/* eslint-disable @next/next/no-html-link-for-pages */
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="not-found">
        <p className="eyebrow">404 / NOT FOUND</p>
        <h1>This route is outside the system.</h1>
        <p>The page may have moved or the address may be incorrect.</p>
        <a className="button button-primary" href="/"><ArrowLeft aria-hidden="true" size={17} /> Return home</a>
      </section>
    </PageShell>
  );
}
