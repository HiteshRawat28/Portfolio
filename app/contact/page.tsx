import { ArrowUpRight, Mail } from "lucide-react";
import { PageShell } from "@/components/portfolio/page-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact Hitesh Rawat about full-stack and AI application engineering opportunities.",
  path: "/contact",
});

const contactOptions = [
  { label: "Email", value: "23ucs595@lnmiit.ac.in", href: "mailto:23ucs595@lnmiit.ac.in" },
  { label: "LinkedIn", value: "hitesh-rawat-a67ba9284", href: "https://www.linkedin.com/in/hitesh-rawat-a67ba9284" },
  { label: "GitHub", value: "HiteshRawat28", href: "https://github.com/HiteshRawat28" },
];

export default function ContactPage() {
  return (
    <PageShell>
      <header className="contact-page-hero">
        <p className="eyebrow">CONTACT</p>
        <h1>Let’s talk about useful software.</h1>
        <p>I’m open to software development, full-stack, backend-oriented, and AI application opportunities.</p>
        <a className="button button-primary" href="mailto:23ucs595@lnmiit.ac.in"><Mail aria-hidden="true" size={17} /> Email Hitesh</a>
      </header>
      <section className="contact-options" aria-label="Contact options">
        {contactOptions.map((option, index) => (
          <a href={option.href} target={option.href.startsWith("http") ? "_blank" : undefined} rel={option.href.startsWith("http") ? "noreferrer noopener" : undefined} key={option.label}>
            <span>0{index + 1}</span><div><small>{option.label}</small><strong>{option.value}</strong></div><ArrowUpRight aria-hidden="true" size={20} />
          </a>
        ))}
      </section>
      <aside className="contact-note"><p>No contact form is used, so your message is not stored by this website. Email and professional profile links are the direct contact channels.</p></aside>
    </PageShell>
  );
}
