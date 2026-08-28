import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export type Feature = {
  title: string;
  body: string;
};

type FeatureGridProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  features: Feature[];
  tone?: "base" | "alt";
  columns?: 2 | 3 | 4;
};

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function FeatureGrid({
  id,
  eyebrow,
  title,
  description,
  features,
  tone = "base",
  columns = 3,
}: FeatureGridProps) {
  return (
    <Section id={id} tone={tone}>
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div
          className={`grid gap-px overflow-hidden rounded-lg border border-line bg-line ${columnClasses[columns]}`}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`flex flex-col gap-2 p-6 ${tone === "alt" ? "bg-ink-900" : "bg-ink-950"}`}
            >
              <h3 className="font-display text-base font-medium text-paper">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
