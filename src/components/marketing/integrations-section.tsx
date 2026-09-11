import { Container } from "@/components/ui/container";
import { Integrations } from "@/components/ui/integrations-4-2";
import { Section, SectionHeader } from "@/components/ui/section";

export function IntegrationsSection() {
  return (
    <Section id="integrations" tone="alt">
      <Container
        width="wide"
        className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <div className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Integrations"
            title="Connected to the tools you already run"
            description="Your phone system, calendar, ad accounts, and payment processor stay where they are. Jarvis becomes the layer that reads and writes across them."
          />
          <p className="font-mono text-xs leading-relaxed text-faint">
            Plus any REST API or webhook endpoint your business already uses.
          </p>
        </div>

        <Integrations />
      </Container>
    </Section>
  );
}
