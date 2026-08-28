import {
  CalendarCheckIcon,
  BotIcon,
  DatabaseIcon,
  InboxIcon,
  LayersIcon,
  UserCheckIcon,
} from "lucide-react";

import { VideoShowcase } from "@/components/product/video-showcase";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

/** The conceptual path a single lead takes through the system. */
const chain = [
  { label: "Lead enters", icon: InboxIcon },
  { label: "Lead Engine", icon: DatabaseIcon },
  { label: "Jarvis Core", icon: LayersIcon },
  { label: "AI Staff", icon: BotIcon },
  { label: "Human approval", icon: UserCheckIcon, human: true },
  { label: "Appointment", icon: CalendarCheckIcon },
];

export function VideoSection() {
  return (
    <Section id="see-it-work">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="See Jarvis Work"
          title={
            <>
              One lead.
              <br />
              One system.
              <br />
              Every next action connected.
            </>
          }
          description="The same record moves through sourcing, routing, conversation, and approval without anyone re-entering it."
        />

        {/* CSS-only travelling light — no client JS for the chain itself. */}
        <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {chain.map((step, index) => (
            <li key={step.label} className="flex flex-1 items-center gap-3">
              <div className="flex flex-1 items-center gap-3 rounded-md border border-line bg-ink-850 p-3">
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-sm border ${
                    step.human
                      ? "border-warn/30 text-warn"
                      : "border-line text-cobalt-400"
                  }`}
                >
                  <step.icon aria-hidden className="size-4" strokeWidth={1.5} />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-paper">
                    {step.label}
                  </span>
                  <span className="type-label text-faint">
                    {step.human ? "Human" : `Step ${index + 1}`}
                  </span>
                </span>
              </div>

              {index < chain.length - 1 ? (
                <span
                  aria-hidden
                  className="jarvis-flow-line hidden h-px w-6 shrink-0 bg-line lg:block"
                />
              ) : null}
            </li>
          ))}
        </ol>

        <VideoShowcase
          src="/videos/jarvis-system-demo.mp4"
          modalSrc="/videos/jarvis-system-demo.mp4"
          label="A lead moving from intake through the Lead Engine, Jarvis Core, AI Staff, and human approval to a booked appointment."
          caption="Placeholder — replace with real product footage at /public/videos/jarvis-system-demo.mp4"
        />
      </Container>
    </Section>
  );
}
