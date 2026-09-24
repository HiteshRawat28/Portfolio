import Image from "next/image";

export function SocialLink({
  label,
  href,
  inverse = false,
  className = "",
}: {
  label: string;
  href: string;
  inverse?: boolean;
  className?: string;
}) {
  const src =
    label === "GitHub"
      ? "/media/brand/github-mark.svg"
      : label === "LinkedIn"
        ? inverse
          ? "/media/brand/linkedin-in-white.png"
          : "/media/brand/linkedin-in-blue.png"
        : null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`feedback inline-flex min-h-11 items-center gap-2 text-sm hover:text-accent ${className}`}
    >
      {src && (
        <Image
          src={src}
          alt=""
          aria-hidden="true"
          width={label === "GitHub" ? 24 : 28}
          height={24}
          className={label === "GitHub" && inverse ? "invert" : ""}
        />
      )}
      <span>{label}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
