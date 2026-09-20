export function Heading({
  children,
  level = 2,
  className = "",
  id,
}: {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  id?: string;
}) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";
  const size = {
    1: "text-5xl md:text-7xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl",
    4: "text-xl",
  }[level];
  return (
    <Tag id={id} className={`${size} ${className}`}>
      {children}
    </Tag>
  );
}
