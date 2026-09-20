export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-tag border border-border bg-surface px-3 py-2 text-sm text-secondary">
      {children}
    </span>
  );
}
