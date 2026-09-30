import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { LeadScraper } from "@/components/product/lead-scraper";
import { ProductFrame } from "@/components/product/product-frame";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Lead Scraper",
  description:
    "Lead Scraper is a separate product priced at $500 per county. Explore public record sourcing, data cleanup, enrichment, deduplication, and routing.",
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
    body: "Ranked against your own criteria for fit and intent, not a generic vendor score.",
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
        eyebrow="Lead Scraper"
        title="Leads sourced, cleaned, and routed on their own"
        description="Lead Scraper is a separate product at $500 per county. It is not included in Jarvis CRM plans. Turn raw sources into records your team can work."
      />

      <Section tone="alt">
        <Container width="wide" className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="The pipeline"
            title="From raw source to assigned owner"
            description="Follow an example run from public records to CRM routing. Counts are illustrative; available sources and data fields vary by market."
          />
          <ProductFrame
            label="Lead Scraper / Example run 4182"
            status="Demo"
            bodyClassName="p-0"
          >
            <LeadScraper />
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
        description="Lead Scraper is $500 per county and is purchased separately from Jarvis CRM. Tell us which counties matter in your market."
        primaryCta={{ label: "View product pricing", href: "/pricing#compare" }}
      />
    </>
  );
}
