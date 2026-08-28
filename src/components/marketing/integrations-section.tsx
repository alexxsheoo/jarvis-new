import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { integrations } from "@/content/homepage";

export function IntegrationsSection() {
  return (
    <Section id="integrations" tone="alt">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Integrations"
          title="Connected to the tools you already run"
          description="Your phone system, calendar, ad accounts, and payment processor stay where they are. Jarvis becomes the layer that reads and writes across them."
        />

        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {integrations.map((integration) => (
            <li
              key={integration}
              className="flex items-center justify-center bg-ink-950 px-3 py-6 text-center text-sm text-muted"
            >
              {integration}
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-faint">
          Plus any REST API or webhook endpoint your business already uses.
        </p>
      </Container>
    </Section>
  );
}
