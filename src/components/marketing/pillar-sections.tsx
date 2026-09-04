import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { AgentStaff } from "@/components/product/agent-staff";
import { LeadEngineFlow } from "@/components/product/lead-engine-flow";
import { PipelineBoard } from "@/components/product/pipeline-board";
import { ProductFrame } from "@/components/product/product-frame";
import { WorkflowCanvas } from "@/components/product/workflow-canvas";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

type PillarSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  capabilities: string[];
  href: string;
  tone?: "base" | "alt";
  children: ReactNode;
};

function PillarSection({
  id,
  eyebrow,
  title,
  description,
  capabilities,
  href,
  tone = "base",
  children,
}: PillarSectionProps) {
  return (
    <Section id={id} tone={tone}>
      <Container width="wide" className="flex flex-col gap-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <Link
            href={href}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-cobalt-400 transition-colors hover:text-paper"
          >
            Explore {eyebrow}
            <ArrowRightIcon aria-hidden className="size-3.5" />
          </Link>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="flex items-center gap-2 text-sm text-muted"
            >
              <CheckIcon
                aria-hidden
                className="size-3.5 shrink-0 text-cobalt-400"
                strokeWidth={2}
              />
              {capability}
            </li>
          ))}
        </ul>

        <Reveal>{children}</Reveal>
      </Container>
    </Section>
  );
}

export function CoreSection() {
  return (
    <PillarSection
      id="core"
      eyebrow="Jarvis CRM"
      title="The operating layer for your revenue"
      description="One record per contact, pipelines that match your stages, and every conversation in one place — with the reporting to prove what moved."
      capabilities={[
        "CRM",
        "Custom pipelines",
        "Unified conversations",
        "Workflows & tasks",
        "Calendars",
        "Dashboards & reporting",
        "Integrations",
        "Permissions",
      ]}
      href="/products/jarvis-crm"
    >
      <ProductFrame label="Pipelines / Acquisitions">
        <PipelineBoard />
      </ProductFrame>
    </PillarSection>
  );
}

export function AiStaffSection() {
  return (
    <PillarSection
      id="ai-staff"
      tone="alt"
      eyebrow="xCerebro AI Agents"
      title="Role-based agents that carry real work"
      description="Not a chatbot bolted onto a CRM. Each agent has a defined role, explicit triggers, a scope of allowed actions, and the approval gates you set."
      capabilities={[
        "Defined roles",
        "Explicit triggers",
        "Scoped actions",
        "Human approval gates",
        "Full activity log",
      ]}
      href="/products/xcerebro-ai-agents"
    >
      <AgentStaff />
    </PillarSection>
  );
}

export function LeadEnginesSection() {
  return (
    <PillarSection
      id="lead-engines"
      eyebrow="Lead Scraper"
      title="Leads sourced, cleaned, and routed on their own"
      description="Public records and custom scrapers feed a pipeline that normalizes, enriches, deduplicates, scores, and assigns — before anyone opens a list."
      capabilities={[
        "Public record sourcing",
        "Data cleanup",
        "Enrichment",
        "Deduplication",
        "Lead scoring",
        "Routing",
        "Custom scrapers",
      ]}
      href="/products/lead-scraper"
    >
      <ProductFrame label="Engines / Public records" status="Running">
        <LeadEngineFlow />
      </ProductFrame>
    </PillarSection>
  );
}

export function CustomSection() {
  return (
    <PillarSection
      id="custom"
      tone="alt"
      eyebrow="Custom Builds"
      title="Built around your business"
      description="When the standard shape does not fit, the system changes — not your process. Custom pipelines, workflows, integrations, and agents scoped to how you already operate."
      capabilities={[
        "Custom pipelines",
        "Custom workflows",
        "Integrations",
        "Bespoke AI agents",
        "Business operating systems",
      ]}
      href="/services/custom-builds"
    >
      <ProductFrame label="Workflows / Offer approval" status="Draft">
        <WorkflowCanvas />
      </ProductFrame>
    </PillarSection>
  );
}
