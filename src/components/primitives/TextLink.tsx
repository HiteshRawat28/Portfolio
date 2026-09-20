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
  const classes = `feedback inline-flex min-h-11 min-w-11 items-center gap-2 border-b border-accent/30 font-medium text-accent no-underline hover:border-accent-hover hover:text-accent-hover ${className}`;
  const arrow = (
    <span
      aria-hidden="true"
      className="inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-current/25 text-[0.7rem]"
    >
      {external ? "↗" : "→"}
    </span>
  );
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {children}
      {arrow}
      <VisuallyHidden> (opens in a new tab)</VisuallyHidden>
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}
