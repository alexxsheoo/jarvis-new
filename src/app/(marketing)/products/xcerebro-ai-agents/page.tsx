import { ArrowUpRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { AgentConversion } from "@/components/marketing/agent-conversion";
import { AgentCost } from "@/components/marketing/agent-cost";
import { AgentImpact } from "@/components/marketing/agent-impact";
import { CtaBand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { HumanAiSection } from "@/components/marketing/human-ai-section";
import { AgentStaff } from "@/components/product/agent-staff";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { xcerebroWebsite } from "@/content/products";

export const metadata: Metadata = {
  title: "xCerebro AI Agents",
  description:
    "Role-based AI agents with defined triggers, scoped actions, and human approval gates. Roles include Lead Concierge, Follow-Up Agent, Appointment Setter, and more.",
};

const principles = [
  {
    title: "A role, not a chatbot",
    body: "Brief each agent like a new hire, with a defined job and a scope of allowed actions.",
  },
  {
    title: "Explicit triggers",
    body: "Agents wake on system events you choose. Nothing runs on a vague sense that it might be helpful.",
  },
  {
    title: "Approval gates",
    body: "You decide which actions send on their own and which wait for a person. Offers and contracts usually wait.",
  },
  {
    title: "Full activity log",
    body: "Every action an agent takes is recorded on the record with what it did and why it fired.",
  },
];

export default function AiStaffPage() {
  return (
    <>
      <PageHero
        animateTitle
        eyebrow="xCerebro AI Agents"
        title="Role-based agents that carry real work"
        description="AI staff handle time-sensitive work inside the same system your team uses, including first response, follow-up, booking, and coordination."
      >
        <div>
          <Link
            href={xcerebroWebsite}
            className={buttonVariants({ size: "lg" })}
          >
            Visit xcerebro.ai
            <ArrowUpRightIcon aria-hidden className="size-4" />
          </Link>
        </div>
      </PageHero>

      <Section tone="alt">
        <Container width="wide" className="flex flex-col gap-8">
          <SectionHeader
            eyebrow="The roster"
            title="Seven roles, scoped to your process"
            description="Select a role to see what wakes it, what it is allowed to do, and where a human signs off."
          />
          <AgentStaff />
        </Container>
      </Section>

      <AgentConversion />

      <AgentImpact />

      <AgentCost />

      <FeatureGrid
        eyebrow="How they work"
        title="Autonomy with boundaries"
        description="AI that can send on your behalf needs a clear scope. These four rules apply to every agent."
        features={principles}
        columns={4}
      />

      <HumanAiSection />

      <CtaBand
        title="Put an AI staff on your pipeline"
        description="We scope each agent's triggers, actions, and approval gates during the build."
      />
    </>
  );
}
