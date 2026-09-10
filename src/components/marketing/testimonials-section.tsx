import { Container } from "@/components/ui/container";
import TestimonialCards from "@/components/ui/testimonial-v2";
import { testimonialSamples } from "@/content/testimonial-samples";
import { testimonials } from "@/content/testimonials";

/** Only mounted on the dedicated Testimonials page. */
export function TestimonialsSection() {
  const isSample = testimonials.length === 0;

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="pb-20 md:pb-28"
    >
      <Container width="wide" className="flex flex-col gap-8">
        {isSample ? (
          <div className="mx-auto max-w-2xl rounded-lg border border-hud bg-ink-900 px-6 py-4 text-center">
            <p className="font-mono text-xs text-neon-300">
              Sample testimonials · Design preview
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              These sample profiles and ERP quotes come from the card template.
              They are not reviews from Jarvis CRM customers.
            </p>
          </div>
        ) : null}
        <TestimonialCards
          testimonials={isSample ? testimonialSamples : testimonials}
          isSample={isSample}
        />
      </Container>
    </section>
  );
}
