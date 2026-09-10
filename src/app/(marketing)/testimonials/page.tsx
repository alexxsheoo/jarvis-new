import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Explore the Jarvis CRM testimonials page.",
  // Keep the template preview out of search until approved customer quotes arrive.
  robots: { index: testimonials.length > 0, follow: true },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Jarvis CRM"
        title="Testimonials"
        description="A closer look at the customer experience."
      />
      <TestimonialsSection />
    </>
  );
}
