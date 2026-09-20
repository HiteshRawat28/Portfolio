export function LimitationsList({ items }: { items: string[] }) {
  return (
    <div className="border-l-2 border-border-strong pl-5">
      <ul className="prose-list text-secondary">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
