import { ArrowRightIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { problemPoints } from "@/content/homepage";

const scattered = [
  "Web forms",
  "Dialer",
  "Spreadsheets",
  "Email tool",
  "Ad platforms",
  "Calendar",
];

export function ProblemSection() {
  return (
    <Section id="problem">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="The problem"
          title="Six tools, none of them talking"
          description="Every disconnected app is a place a lead can stall without anyone noticing. The gaps between systems are where revenue quietly leaks."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <Reveal className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
            {scattered.map((tool) => (
              <div
                key={tool}
                className="rounded-md border border-dashed border-line-strong bg-ink-900 px-3 py-4 text-center text-xs text-muted"
              >
                {tool}
              </div>
            ))}
          </Reveal>

          <ArrowRightIcon
            aria-hidden
            className="mx-auto size-5 shrink-0 rotate-90 text-faint lg:rotate-0"
            strokeWidth={1.5}
          />

          <Reveal
            delay={0.1}
            className="rounded-lg border border-cobalt-500/40 bg-cobalt-glow p-6"
          >
            <p className="font-display text-h3 text-paper">One system</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A single record per contact, one pipeline of truth, and automation
              that survives the handoff between tools.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {problemPoints.map((point) => (
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
