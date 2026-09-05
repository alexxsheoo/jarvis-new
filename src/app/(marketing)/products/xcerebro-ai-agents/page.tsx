import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { AgentConversion } from "@/components/marketing/agent-conversion";
import { AgentCost } from "@/components/marketing/agent-cost";
import { AgentImpact } from "@/components/marketing/agent-impact";
import { CtaBand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { AgentStaff } from "@/components/product/agent-staff";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "xCerebro AI Agents",
  description:
    "Role-based AI agents with defined triggers, scoped actions, and human approval gates — Lead Concierge, Follow-Up, Appointment Setter, and more.",
};

const principles = [
  {
    title: "A role, not a chatbot",
    body: "Each agent owns a defined job with a scope of allowed actions — the same way you would brief a new hire.",
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
        eyebrow="xCerebro AI Agents"
        title="Role-based agents that carry real work"
        description="AI staff handle the work that depends on speed and consistency — first response, follow-up, booking, and coordination — inside the same system your team uses."
      />

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

      <CtaBand
        title="Put an AI staff on your pipeline"
        description="We scope each agent's triggers, actions, and approval gates during the build."
      />
    </>
  );
}
