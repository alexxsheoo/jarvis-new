import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { CrmBento } from "@/components/marketing/crm-bento";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { ConversationInbox } from "@/components/product/conversation-inbox";
import { PipelineBoard } from "@/components/product/pipeline-board";
import { ProductFrame } from "@/components/product/product-frame";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Jarvis CRM",
  description:
    "CRM, custom pipelines, unified conversations, workflows, calendars, dashboards, reporting, integrations, and permissions in one operating layer.",
};

const features = [
  {
    title: "CRM",
    body: "One record per contact with full history — every call, message, task, and stage change in one timeline.",
  },
  {
    title: "Custom pipelines",
    body: "Stages that match how you actually sell, with entry and exit rules that move records without manual dragging.",
  },
  {
    title: "Unified conversations",
    body: "Calls, texts, and email land in one inbox threaded to the record, so nobody works from a separate app.",
  },
  {
    title: "Workflows",
    body: "Trigger-based automation across records, people, and outside systems — with approval gates where you want them.",
  },
  {
    title: "Tasks",
    body: "Work assigned to the right person with due dates, escalation, and visibility when something slips.",
  },
  {
    title: "Calendars",
    body: "Real availability across your team, with booking rules that respect territory, capacity, and working hours.",
  },
  {
    title: "Dashboards",
    body: "Live views by owner, pipeline, and source — built to answer the questions you actually ask on Monday.",
  },
  {
    title: "Reporting",
    body: "Attribution from first touch to closed, without exporting anything to a spreadsheet.",
  },
  {
    title: "Permissions",
    body: "Role-based access down to the field, covering both people and the AI staff acting on your behalf.",
  },
];

export default function CorePage() {
  return (
    <>
      <PageHero
        eyebrow="Jarvis CRM"
        title="The operating layer for your revenue"
        description="Core is the system of record everything else runs on. Pipelines, conversations, and work in one place — so no deal depends on someone remembering it."
      />

      <Section tone="alt">
        <Container width="wide" className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="Pipelines"
            title="Stages that match how you sell"
            description="Records advance on rules you define. The board reflects reality without anyone maintaining it."
          />
          <ProductFrame label="Pipelines / Acquisitions">
            <PipelineBoard />
          </ProductFrame>
        </Container>
      </Section>

      <Section>
        <Container width="wide" className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="Conversations"
            title="Every channel, one thread"
            description="Calls, texts, and email attach to the record automatically — including anything an agent sent on your behalf."
          />
          <ProductFrame label="Conversations / Inbox">
            <ConversationInbox />
          </ProductFrame>
        </Container>
      </Section>

      <CrmBento />

      <FeatureGrid
        tone="alt"
        eyebrow="What is included"
        title="Everything the operating layer covers"
        features={features}
      />

      <CtaBand />
    </>
  );
}
