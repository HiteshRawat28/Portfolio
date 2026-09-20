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
  const classes = `feedback inline-flex min-h-12 items-center justify-center gap-3 rounded-button border bg-background px-6 py-3 text-base font-normal text-primary ${props.variant === "secondary" ? "border-border-strong hover:border-primary hover:bg-surface" : "border-primary shadow-action hover:bg-surface-elevated"} ${props.className ?? ""}`;
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
