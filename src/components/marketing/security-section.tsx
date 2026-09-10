import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

const crmControls = [
  {
    title: "Role-based permissions",
    body: "Control what each team member can see and edit in the CRM.",
  },
  {
    title: "Contact ownership",
    body: "Assign an owner so the team knows who is responsible for the next step.",
  },
  {
    title: "Activity history",
    body: "Review conversations, tasks, and record changes in one place.",
  },
  {
    title: "Your data stays yours",
    body: "Export your contact data whenever you need it.",
  },
];

export function SecuritySection() {
  return (
    <Section id="security">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Security & control"
          title="Keep your team and records organized"
          description="Give people the access they need, make ownership clear, and keep a history of the work."
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {crmControls.map((point) => (
            <div
              key={point.title}
              className="flex flex-col gap-2 bg-ink-950 p-6"
            >
              <h3 className="font-display text-base font-medium text-paper">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{point.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
