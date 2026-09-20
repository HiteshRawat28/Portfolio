import { Container } from "./Container";
export function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`section-space border-t border-border ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
