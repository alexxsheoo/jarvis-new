import { UserRoundIcon } from "lucide-react";
import { BotIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

/**
 * Who does what. The architecture only reads as honest if the division of
 * labour is stated plainly — agents carry volume, people carry the calls that
 * commit the business to something.
 */
const columns = [
  {
    title: "What the agents carry",
    icon: BotIcon,
    accent: "border-hud bg-neon-glow text-neon-400",
    items: [
      "First response, at any hour",
      "Qualifying against your criteria",
      "Follow-up sequences that stop on reply",
      "Offering times and booking them",
      "Logging every action on the record",
      "Chasing missing fields and stalled stages",
    ],
  },
  {
    title: "What your team keeps",
    icon: UserRoundIcon,
    accent: "border-line-strong bg-ink-850 text-paper",
    items: [
      "Any number that commits the business",
      "Pricing, offers, and negotiation",
      "The relationship on a live deal",
      "Approving anything off-script",
      "Judgement calls the rules do not cover",
      "Deciding what the agents are allowed to do",
    ],
  },
];

export function HumanAiSection() {
  return (
    <Section id="human-ai">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Human + AI"
          title="Agents do the volume. People do the deciding."
          description="Automation earns trust by having limits. Every agent runs inside a scope you set, and the work that commits money or reputation stops at a person."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {columns.map((column) => (
            <div
              key={column.title}
              className="flex flex-col gap-5 rounded-lg border border-line bg-ink-900 p-6"
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex size-9 shrink-0 items-center justify-center rounded-md border ${column.accent}`}
                >
                  <column.icon aria-hidden className="size-4" strokeWidth={1.5} />
                </span>
                <span className="font-display text-base font-medium text-paper">
                  {column.title}
                </span>
              </span>

              <ul className="flex flex-col gap-2.5">
                {column.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
