import type { Decision } from "@/lib/types";
import { Heading } from "../primitives/Heading";
import { Text } from "../primitives/Text";
export function DecisionList({ decisions }: { decisions: Decision[] }) {
  return (
    <ol className="grid gap-8">
      {decisions.map((d) => (
        <li key={d.title}>
          <Heading level={3} className="text-xl">
            {d.title}
          </Heading>
          <Text className="mt-3">{d.detail}</Text>
        </li>
      ))}
    </ol>
  );
}
