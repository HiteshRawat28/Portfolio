import Link from "next/link";
import { VisuallyHidden } from "./VisuallyHidden";
export function TextLink({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const classes = `feedback inline-flex min-h-11 min-w-11 items-center gap-2 text-accent underline decoration-accent/30 underline-offset-4 hover:text-accent-hover hover:decoration-accent ${className}`;
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {children}
      <span aria-hidden="true">↗</span>
      <VisuallyHidden> (opens in a new tab)</VisuallyHidden>
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
