import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Jarvis exists: an AI Revenue Operating System built around how owner-led businesses actually sell.",
};

const principles = [
  {
    title: "The system adapts, not you",
    body: "If the software requires changing a process that already works, the software is wrong. Custom is a first-class part of the product, not an upsell.",
  },
  {
    title: "AI with a defined scope",
    body: "Agents get a role, explicit triggers, and approval gates. Autonomy without boundaries is how automation loses trust.",
  },
  {
    title: "One record, one truth",
    body: "Most revenue leaks happen in the gap between tools. Consolidating the record is worth more than any single feature.",
  },
  {
    title: "Accountable implementation",
    body: "Software that replaces an operating process cannot be self-serve. Every build has a person responsible for it going live.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="We build the system owner-led businesses actually run on"
        description="Jarvis exists because the tools that promise to run a sales operation mostly manage one slice of it and leave the coordination to people."
      />

      <Section tone="alt">
        <Container className="flex flex-col gap-8">
          <SectionHeader eyebrow="Where this came from" title="Built in the field, not in a lab" />
          <div className="flex max-w-[68ch] flex-col gap-5 text-base leading-relaxed text-muted">
            <p>
              Jarvis started inside real estate, where the gap between a lead
              arriving and someone responding decides whether a deal exists at
              all. Solving that meant building lead sourcing, a CRM that matched
              how acquisitions actually work, and automation that could act
              without waiting for a person to be free.
            </p>
            <p>
              The pattern turned out not to be specific to real estate. Any
              owner-led business where leads arrive faster than people can work
              them has the same shape — and the same failure mode, where revenue
              leaks in the handoffs between disconnected tools.
            </p>
            <p>
              So Jarvis was rebuilt as an operating system rather than a vertical
              product: a core to hold the record, AI staff to carry the work that
              depends on speed, engines to keep the pipeline fed, and custom
              capacity for the parts of a business that never fit a template.
            </p>
          </div>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="How we build"
        title="Four principles that decide what ships"
        features={principles}
        columns={4}
      />

      <CtaBand />
    </>
  );
}
