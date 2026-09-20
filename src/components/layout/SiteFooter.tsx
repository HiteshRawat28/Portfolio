import { Container } from "../primitives/Container";
import { TextLink } from "../primitives/TextLink";
import { profile } from "@/content/profile";
export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="font-medium">Hitesh Rawat</p>
            <p className="mt-2 text-sm text-secondary">
              Full-stack systems. Practical AI applications.
            </p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {[
              ["/projects", "Work"],
              ["/focus/full-stack", "Full-stack"],
              ["/focus/ai-applications", "AI applications"],
              ["/contact", "Contact"],
              ["/Hitesh-Rawat-Resume.pdf", "Résumé PDF"],
            ].map(([href, label]) => (
              <TextLink key={href} href={href} className="text-sm">
                {label}
              </TextLink>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Hitesh Rawat · {profile.location}
          </p>
          <div className="flex flex-wrap gap-6">
            {profile.links.slice(0, 2).map((link) => (
              <TextLink
                key={link.label}
                href={link.href}
                external
                className="text-sm"
              >
                {link.label}
              </TextLink>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
