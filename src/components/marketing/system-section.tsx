import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { platformPillars } from "@/content/nav";

import { PillarTabs } from "./pillar-tabs";

export function SystemSection() {
  return (
    <Section id="system" tone="alt">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="The system"
          title="Four parts, one operating system"
          description="Each piece works on its own. Together they remove the handoffs where deals go quiet."
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {platformPillars.map((pillar) => (
            <div
              key={pillar.href}
              className="flex flex-col gap-3 bg-ink-950 p-6"
            >
              <pillar.icon
                aria-hidden
                className="size-5 text-cobalt-400"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-base font-medium text-paper">
                {pillar.label}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {pillar.summary}
              </p>
            </div>
          ))}
        </div>

        <Reveal>
          <PillarTabs />
        </Reveal>
      </Container>
    </Section>
  );
}
