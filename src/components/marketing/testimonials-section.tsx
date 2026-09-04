import { QuoteIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { testimonials } from "@/content/testimonials";

/**
 * Customer testimonials.
 *
 * Renders nothing while `testimonials` is empty, which it is until real quotes
 * are supplied. An empty section is better than a section of invented praise:
 * a fabricated endorsement attributed to a named person is the one kind of
 * placeholder that cannot be quietly corrected later.
 */
export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" tone="alt">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Customers"
          title="Why teams keep it"
          description="What owners say once the system has been running long enough to judge."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={`${testimonial.company}-${testimonial.name}`}
              delay={index * 0.08}
              className="h-full"
            >
              <figure className="flex h-full flex-col gap-5 rounded-lg border border-line bg-ink-950 p-6">
                <QuoteIcon
                  aria-hidden
                  className="size-5 shrink-0 text-cobalt-400"
                  strokeWidth={1.5}
                />
                <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="hairline-t flex flex-col gap-0.5 pt-4">
                  <span className="text-sm font-medium text-paper">
                    {testimonial.name}
                  </span>
                  <span className="type-label text-faint">
                    {testimonial.role} · {testimonial.company}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
