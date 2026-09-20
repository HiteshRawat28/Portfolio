export function Grid({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`split-grid ${className}`}>{children}</div>;
}
