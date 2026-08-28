import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { proof } from "@/content/homepage";

export function ProofSection() {
  return (
    <Section id="proof" tone="alt">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Proof"
          title="One system, many industries"
          description="Jarvis started in real estate. The engine that made it good at public-record sourcing turned out to be good at any business where leads arrive faster than people can work them."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {proof.map((item, index) => (
            <Reveal key={item.industry} delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col gap-4 rounded-lg border border-line bg-ink-950 p-6">
                <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
                  {item.industry}
                </span>
                <h3 className="font-display text-h3 text-balance text-paper">
                  {item.headline}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
