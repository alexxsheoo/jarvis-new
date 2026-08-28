import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { LeadEngineFlow } from "@/components/product/lead-engine-flow";
import { ProductFrame } from "@/components/product/product-frame";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Jarvis Lead Engines",
  description:
    "Public record sourcing, data cleanup, enrichment, deduplication, lead scoring, routing, and custom scrapers — running continuously.",
};

const stages = [
  {
    title: "Public record sourcing",
    body: "County and public data sources pulled on a schedule you set, in the jurisdictions you actually work.",
  },
  {
    title: "Data cleanup",
    body: "Addresses, names, and phone numbers normalized into a consistent shape before anything downstream sees them.",
  },
  {
    title: "Enrichment",
    body: "Contact details and ownership context appended so a record arrives workable rather than raw.",
  },
  {
    title: "Deduplication",
    body: "Matched against everything already in your CRM so nobody works a lead a colleague is already on.",
  },
  {
    title: "Lead scoring",
    body: "Ranked against your own criteria for fit and intent — not a generic vendor score.",
  },
  {
    title: "Routing",
    body: "Assigned by territory, capacity, or round-robin, then handed to the agent or person who works it.",
  },
  {
    title: "Custom scrapers",
    body: "When a source matters to your business and no integration exists, we build the collector for it.",
  },
];

export default function LeadEnginesPage() {
  return (
    <>
      <PageHero
        eyebrow="Jarvis Lead Engines"
        title="Leads sourced, cleaned, and routed on their own"
        description="Most teams do not have a lead problem — they have a list problem. Engines turn raw sources into records that are ready to work the moment someone opens them."
      />

      <Section tone="alt">
        <Container width="wide" className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="The pipeline"
            title="From raw source to assigned owner"
            description="Each stage narrows the set. What reaches a person is deduplicated, enriched, and scored."
          />
          <ProductFrame label="Engines / Public records" status="Running">
            <LeadEngineFlow />
          </ProductFrame>
        </Container>
      </Section>

      <FeatureGrid
        eyebrow="What runs"
        title="Every stage, configured to your market"
        features={stages}
      />

      <CtaBand
        title="Turn your sources into a working pipeline"
        description="Tell us which sources matter in your market and we will scope the engine around them."
      />
    </>
  );
}
