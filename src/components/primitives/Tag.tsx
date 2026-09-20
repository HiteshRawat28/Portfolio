export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-tag border border-border bg-surface-elevated px-3 py-2 text-xs tracking-wide text-secondary">
      {children}
    </span>
  );
}
