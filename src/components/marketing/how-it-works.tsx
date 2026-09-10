import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
const steps = [
  { number: "01", title: "Capture", body: "Bring inquiries from forms, calls, and messages into a contact record with conversation history." },
  { number: "02", title: "Organize", body: "Assign an owner and track opportunities through the pipeline stages your team uses." },
  { number: "03", title: "Follow up", body: "Trigger messages, tasks, and appointment reminders from your workflow rules." },
  { number: "04", title: "Measure", body: "Review pipeline movement and team activity to see where to focus next." },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="How it works"
          title="From a new lead to the next step."
          description="Capture the conversation, organize the opportunity, and keep follow-up moving in Jarvis CRM."
        />

        <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-3 bg-ink-950 p-6">
                  <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
                    {step.number}
                  </span>
                  <h3 className="font-display text-h3 text-paper">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
