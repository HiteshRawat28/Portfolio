import { Container } from "../primitives/Container";
import { TextLink } from "../primitives/TextLink";
import { profile } from "@/content/profile";
export function SiteFooter() {
  const profileLinks = profile.links.filter((link) =>
    ["GitHub", "LinkedIn"].includes(link.label),
  );
  return (
    <footer className="border-t border-primary bg-primary py-5 text-inverse">
      <Container className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <p className="text-sm text-inverse/70">
          © {new Date().getFullYear()} Hitesh Rawat · {profile.location}
        </p>
        <div className="flex flex-wrap gap-6 sm:justify-end">
          {profileLinks.map((link) => (
            <TextLink
              key={link.label}
              href={link.href}
              external
              className="border-inverse/30 text-sm text-inverse hover:border-inverse hover:text-inverse"
            >
              {link.label}
            </TextLink>
          ))}
        </div>
      </Container>
    </footer>
  );
}
