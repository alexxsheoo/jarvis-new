import { DashboardPanel } from "@/components/product/dashboard-panel";
import { ProductFrame } from "@/components/product/product-frame";
import { WorkflowCanvas } from "@/components/product/workflow-canvas";
import { Container } from "@/components/ui/container";
import { ParallaxFeatureSection } from "@/components/ui/parallax-scroll-feature-section";
import { Section, SectionHeader } from "@/components/ui/section";
import { brand } from "@/content/products";

/**
 * Two CRM surfaces the product page does not otherwise show — reporting and
 * automation — each revealed as it scrolls in. The page already frames
 * pipelines and conversations above; showing them a second time here would
 * be the same mockup twice on one page.
 *
 * Copy describes behaviour only. The figures inside the mockups are the
 * illustrative ones those components already carry.
 */
export function CrmShowcase() {
  return (
    <Section id="crm-showcase">
      <Container width="wide" className="flex flex-col gap-4">
        <SectionHeader
          eyebrow={`${brand.crm} — in use`}
          title="The parts you see every day"
          description="What the system looks like once it is running — the reporting it produces and the automation that keeps the pipeline moving without anyone chasing it."
        />

        <ParallaxFeatureSection
          features={[
            {
              id: "reporting",
              eyebrow: "Reporting",
              title: "Read from the records the team already works",
              description:
                "Pipeline value, stage movement, response times, and activity by owner — reported from the same records people update all day, not from a spreadsheet someone rebuilds on Friday.",
              visual: (
                <ProductFrame label="Dashboards / Revenue">
                  <DashboardPanel />
                </ProductFrame>
              ),
            },
            {
              id: "automation",
              eyebrow: "Automation",
              title: "Workflows that fire from what happens in the pipeline",
              description:
                "A stage change triggers the follow-up, the task, the reminder, and the handoff — so the process runs the same way every time, whether or not anyone remembers it.",
              visual: (
                <ProductFrame label="Workflows / Offer approval" status="Draft">
                  <WorkflowCanvas />
                </ProductFrame>
              ),
              reverse: true,
            },
          ]}
        />
      </Container>
    </Section>
  );
}
