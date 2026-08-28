import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { securityPoints } from "@/content/homepage";

export function SecuritySection() {
  return (
    <Section id="security">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Security & control"
          title="Permissions, audit, and data you own"
          description="AI that can send on your behalf needs boundaries. Every action is scoped, logged, and reversible."
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {securityPoints.map((point) => (
            <div key={point.title} className="flex flex-col gap-2 bg-ink-950 p-6">
              <h3 className="font-display text-base font-medium text-paper">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{point.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
