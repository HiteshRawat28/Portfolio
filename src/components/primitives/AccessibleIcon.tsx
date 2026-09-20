export function AccessibleIcon({
  name,
  label,
}: {
  name: "arrow" | "menu" | "close" | "download";
  label?: string;
}) {
  const path = {
    arrow: "M5 12h14m-6-6 6 6-6 6",
    menu: "M4 6h16M4 12h16M4 18h16",
    close: "m6 6 12 12M18 6 6 18",
    download: "M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5",
  }[name];
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
    >
      {label && <title>{label}</title>}
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
