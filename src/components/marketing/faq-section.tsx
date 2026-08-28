"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { faqs } from "@/content/homepage";

export function FaqSection() {
  return (
    <Section id="faq">
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Questions"
          title="What owners ask before they build"
        />

        <Accordion type="single" collapsible className="flex flex-col">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="max-w-[68ch] text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
