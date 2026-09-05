"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { CostComparisonPanel } from "@/components/marketing/cost-comparison-panel";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { costComparisons, costDisclaimer } from "@/content/cost-comparison";
import { offers } from "@/content/products";
import { cn } from "@/lib/cn";

const byId = Object.fromEntries(offers.map((offer) => [offer.id, offer]));

/**
 * What each add-on replaces, and what that alternative costs.
 *
 * Tabs rather than three stacked tables: the comparisons are alternatives to
 * each other in the reader's mind, and three long tables in a row is where a
 * page stops being read. A client component only for the tab state — the
 * panels are static markup, so first paint matches the server.
 *
 * The CRM is not a tab here. Its comparison is the stack table further up the
 * page, which is a different argument: one platform against six subscriptions,
 * not one line item against another.
 */
export function CostComparisons() {
  const [activeId, setActiveId] = useState(costComparisons[0].id);
  const active =
    costComparisons.find((c) => c.id === activeId) ?? costComparisons[0];
  const offer = byId[active.offerId];

  return (
    <Section id="cost" tone="alt">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="What it replaces"
          title="The alternative already costs something"
          description="Every one of these is a job businesses already pay for — in salaries, in bought lists, or in contractor hours. This is what changes when the system does it instead."
        />

        <div role="tablist" aria-label="Cost comparisons" className="flex flex-wrap gap-2">
          {costComparisons.map((comparison) => {
            const selected = comparison.id === active.id;
            return (
              <button
                key={comparison.id}
                type="button"
                role="tab"
                id={`cost-tab-${comparison.id}`}
                aria-selected={selected}
                aria-controls="cost-panel"
                onClick={() => setActiveId(comparison.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ease-standard",
                  selected
                    ? "border-cobalt-500/50 bg-cobalt-glow text-paper"
                    : "border-line bg-ink-950 text-muted hover:border-line-strong hover:text-paper",
                )}
              >
                {byId[comparison.offerId].name}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id="cost-panel"
          aria-labelledby={`cost-tab-${active.id}`}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-h3 text-paper">{active.title}</h3>
            <p className="max-w-[68ch] text-sm leading-relaxed text-muted">
              {active.intro}
            </p>
          </div>

          <CostComparisonPanel comparison={active} />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[70ch] text-xs leading-relaxed text-faint">
            {costDisclaimer}
          </p>
          <Link
            href={offer.href}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-cobalt-400 transition-colors hover:text-paper"
          >
            {offer.cta}
            <ArrowRightIcon aria-hidden className="size-3.5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
