import Link from "next/link";
type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & (
  | { href: string; download?: string }
  | {
      href?: never;
      type?: "button" | "submit";
      disabled?: boolean;
      busy?: boolean;
    }
);
export function Button(props: Props) {
  const classes = `feedback inline-flex min-h-12 items-center justify-center gap-3 rounded-button border px-6 py-3 text-sm font-medium ${props.variant === "secondary" ? "border-border-strong bg-transparent text-primary hover:border-accent hover:text-accent" : "border-accent bg-accent text-inverse shadow-action hover:border-accent-hover hover:bg-accent-hover"} ${props.className ?? ""}`;
  if (props.href !== undefined)
    return props.download ? (
      <a href={props.href} download={props.download} className={classes}>
        {props.children}
      </a>
    ) : (
      <Link href={props.href} className={classes}>
        {props.children}
      </Link>
    );
  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      aria-busy={props.busy}
      className={`${classes} disabled:opacity-70`}
    >
      {props.children}
    </button>
  );
}
