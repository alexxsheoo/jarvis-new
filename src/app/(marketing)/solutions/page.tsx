import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Jarvis for owner-led sales teams, acquisitions, services and trades, brokerages, and agencies — one operating system, configured per industry.",
};

const solutions = [
  {
    id: "owner-led",
    name: "Owner-led sales teams",
    problem:
      "The owner is still the best closer, and the system depends on them remembering everything.",
    approach:
      "AI staff take first response and follow-up so the owner only touches deals that are ready for a decision.",
    pillars: ["Core", "AI Staff"],
  },
  {
    id: "acquisitions",
    name: "Acquisitions",
    problem:
      "Lists arrive raw, overlap with what you already own, and go stale before anyone works them.",
    approach:
      "Engines source, clean, dedupe, and score nightly, then route only the priority set to the right buyer.",
    pillars: ["Lead Engines", "Custom"],
  },
  {
    id: "services",
    name: "Services & trades",
    problem:
      "Missed calls are lost jobs, and quoting depends on whoever is free to call back.",
    approach:
      "Every missed call triggers an immediate text, qualification, and a booked estimate against real availability.",
    pillars: ["AI Staff", "Core"],
  },
  {
    id: "brokerages",
    name: "Brokerages",
    problem:
      "Agents work in their own tools, so the brokerage has no reliable view of the pipeline.",
    approach:
      "Shared pipelines with per-agent permissions give visibility without taking away how each agent works.",
    pillars: ["Core", "Custom"],
  },
  {
    id: "agencies",
    name: "Agencies",
    problem:
      "Client reporting is assembled by hand from six platforms every month.",
    approach:
      "Unified conversations and attribution roll into a live dashboard per client that refreshes itself.",
    pillars: ["Core", "Custom"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="One system, configured to your industry"
        description="Jarvis started in real estate and grew into the businesses that share its shape — owner-led teams where leads arrive faster than people can work them."
      />

      <Section tone="alt">
        <Container width="wide" className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Where it fits"
            title="Same operating system, different configuration"
            description="The pillars do not change. What changes is which stages, sources, and agents get built."
          />

          <div className="flex flex-col gap-px overflow-hidden rounded-lg border border-line bg-line">
            {solutions.map((solution) => (
              <article
                key={solution.id}
                id={solution.id}
                className="grid gap-6 bg-ink-900 p-6 md:grid-cols-[1fr_1fr_auto] md:gap-10 md:p-8"
              >
                <div className="flex flex-col gap-2">
                  <h2 className="font-display text-h3 text-paper">
                    {solution.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">
                    {solution.problem}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-paper">
                  {solution.approach}
                </p>
                <div className="flex flex-wrap gap-2 md:flex-col md:items-end">
                  {solution.pillars.map((pillar) => (
                    <Badge key={pillar}>{pillar}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Not sure which shape you are?"
        description="Describe how your business sells and we will tell you what we would build first."
      />
    </>
  );
}
