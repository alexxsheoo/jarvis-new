import { CostComparisonPanel } from "@/components/marketing/cost-comparison-panel";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { costComparisons, costDisclaimer } from "@/content/cost-comparison";

const comparison = costComparisons.find((c) => c.id === "agents");

/**
 * Assistants vs agents, on the agents' own page. The homepage shows the same
 * comparison as one of three tabs; a reader who has come this far wants only
 * this one, framed as a cost question rather than a product tour.
 *
 * Figures come from `cost-comparison.ts` and carry its provenance notes —
 * change them there, not here.
 */
export function AgentCost() {
  if (!comparison) return null;

  return (
    <Section id="cost">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="What it replaces"
          title={comparison.title}
          description={comparison.intro}
        />

        <CostComparisonPanel comparison={comparison} />

        <p className="max-w-[70ch] text-xs leading-relaxed text-faint">
          {costDisclaimer}
        </p>
      </Container>
    </Section>
  );
}
