import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { steps } from "@/content/homepage";

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="How it works"
          title="Map, build, connect, run"
          description="A scoped implementation with a person accountable for it — not a signup screen that leaves you to configure the thing yourself."
        />

        <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 bg-ink-950 p-6">
                  <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
                    {step.number}
                  </span>
                  <h3 className="font-display text-h3 text-paper">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
