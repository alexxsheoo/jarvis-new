import { CheckIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { faqs } from "@/content/homepage";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Jarvis is scoped to your operation — pipelines, agents, and integrations. Pricing is quoted after a mapping conversation.",
};

const tiers = [
  {
    name: "Core",
    summary: "The operating layer for a team that needs one system of record.",
    includes: [
      "CRM and custom pipelines",
      "Unified conversations",
      "Workflows, tasks, calendars",
      "Dashboards and reporting",
      "Standard integrations",
      "Role-based permissions",
    ],
    featured: false,
  },
  {
    name: "Core + AI Staff",
    summary:
      "Everything in Core, plus agents carrying first response, follow-up, and booking.",
    includes: [
      "Everything in Core",
      "Role-based AI agents",
      "Trigger and action scoping",
      "Human approval gates",
      "Agent activity logging",
      "Conversation handling",
    ],
    featured: true,
  },
  {
    name: "Full system",
    summary:
      "Core, AI Staff, and Lead Engines with the custom work your operation needs.",
    includes: [
      "Everything in Core + AI Staff",
      "Lead sourcing and enrichment",
      "Deduplication and scoring",
      "Custom scrapers",
      "Bespoke agents and workflows",
      "Custom integrations",
    ],
    featured: false,
  },
];

const pricingFaqs = faqs.filter((faq) =>
  ["What does it cost?", "How long does implementation take?", "Do we have to replace the tools we already pay for?"].includes(
    faq.question,
  ),
);

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Scoped to your operation, quoted after we map it"
        description="Every build differs in how many pipelines, agents, and integrations it needs. We would rather quote something accurate than publish a tier you would outgrow in a quarter."
      />

      <Section tone="alt">
        <Container width="wide" className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="What you can build"
            title="Three common shapes"
            description="Most builds start at one of these and get adjusted during mapping."
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "flex flex-col gap-6 rounded-lg border p-6",
                  tier.featured
                    ? "border-cobalt-500/50 bg-cobalt-glow"
                    : "border-line bg-ink-950",
                )}
              >
                <div className="flex flex-col gap-2">
                  <h2 className="font-display text-h3 text-paper">
                    {tier.name}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">
                    {tier.summary}
                  </p>
                </div>

                <ul className="flex flex-1 flex-col gap-2.5">
                  {tier.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted"
                    >
                      <CheckIcon
                        aria-hidden
                        className="mt-0.5 size-3.5 shrink-0 text-cobalt-400"
                        strokeWidth={2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={site.cta.primary.href}
                  className={buttonVariants({
                    variant: tier.featured ? "primary" : "secondary",
                    size: "md",
                  })}
                >
                  {site.cta.primary.label}
                </Link>
              </div>
            ))}
          </div>

          <p className="font-mono text-xs text-faint">
            Implementation is scoped separately from the running system. Both are
            quoted together after mapping.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-10">
          <SectionHeader eyebrow="Questions" title="Before you ask for a quote" />
          <dl className="flex flex-col gap-px overflow-hidden rounded-lg border border-line bg-line">
            {pricingFaqs.map((faq) => (
              <div key={faq.question} className="flex flex-col gap-2 bg-ink-950 p-6">
                <dt className="font-display text-base font-medium text-paper">
                  {faq.question}
                </dt>
                <dd className="max-w-[68ch] text-sm leading-relaxed text-muted">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <CtaBand
        title="Get an accurate number"
        description="Tell us the shape of your operation and we will come back with scope and cost together."
      />
    </>
  );
}
