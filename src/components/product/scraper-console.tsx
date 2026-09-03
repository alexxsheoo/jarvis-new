"use client";

import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { useState } from "react";

import { ProductFrame } from "@/components/product/product-frame";
import { StatusDot } from "@/components/ui/status-dot";
import { scraperRuns, scraperStages } from "@/content/scraper";
import { cn } from "@/lib/cn";

/**
 * Lead Scraper console. A client component only because the source tabs are
 * interactive — the run itself is static markup, so the first paint is
 * identical on server and client and there is nothing to hydrate mismatched.
 *
 * Every figure is example data. The pipeline motion reuses `jarvis-flow-line`,
 * which collapses to a plain rule under reduced motion.
 */
export function ScraperConsole() {
  const [activeId, setActiveId] = useState(scraperRuns[0].id);
  const run = scraperRuns.find((r) => r.id === activeId) ?? scraperRuns[0];

  return (
    <div className="flex flex-col gap-4">
      <div
        role="tablist"
        aria-label="Example data sources"
        className="flex flex-wrap gap-2"
      >
        {scraperRuns.map((option) => {
          const selected = option.id === run.id;
          return (
            <button
              key={option.id}
              type="button"
              role="tab"
              id={`scraper-tab-${option.id}`}
              aria-selected={selected}
              aria-controls="scraper-panel"
              onClick={() => setActiveId(option.id)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 type-label transition-colors duration-200 ease-standard",
                selected
                  ? "border-hud bg-neon-glow text-neon-400"
                  : "border-line bg-ink-900 text-muted hover:border-line-strong hover:text-paper",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id="scraper-panel" aria-labelledby={`scraper-tab-${run.id}`}>
        <ProductFrame
          label={`Lead Scraper / ${run.label}`}
          status={run.status}
          bodyClassName="p-0"
        >
          {/* Source line */}
          <div className="hairline-b flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <span className="flex min-w-0 flex-col gap-1">
              <span className="type-label text-faint">Source</span>
              <span className="truncate text-sm text-paper">{run.source}</span>
            </span>
            <span className="flex items-center gap-2 type-label text-neon-400">
              <StatusDot tone="live" className="jarvis-status text-neon-400" />
              Status: {run.status}
            </span>
          </div>

          {/* Counters */}
          <dl className="hairline-b grid grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-5">
            {run.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5 bg-ink-850 px-5 py-4">
                <dt className="type-label text-faint">{stat.label}</dt>
                <dd className="type-metric text-h3 text-paper">{stat.value}</dd>
              </div>
            ))}
          </dl>

          {/* Pipeline */}
          <div className="px-5 py-5">
            <span className="type-label-wide text-faint">Pipeline</span>

            <ol className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-0">
              {scraperStages.map((stage, index) => {
                const last = index === scraperStages.length - 1;
                return (
                  <li
                    key={stage}
                    className="flex items-center gap-3 lg:flex-1 lg:gap-0"
                  >
                    <span
                      className={cn(
                        "flex items-center gap-2 rounded-md border px-3 py-2 lg:justify-center",
                        last
                          ? "border-hud bg-neon-glow text-neon-400"
                          : "border-line bg-ink-900 text-muted",
                      )}
                    >
                      <CheckIcon aria-hidden className="size-3" strokeWidth={2.5} />
                      <span className="type-label whitespace-nowrap">{stage}</span>
                    </span>

                    {!last ? (
                      <>
                        {/* Wide: a flowing rule carries records to the next
                            stage. Narrow: a plain arrow, since a 1px
                            horizontal rule in a vertical stack reads as
                            nothing at all. */}
                        <span
                          aria-hidden
                          className="jarvis-flow-line hidden h-px flex-1 lg:block"
                          style={{ animationDuration: `${2.2 + index * 0.3}s` }}
                        />
                        <ArrowRightIcon
                          aria-hidden
                          className="size-3.5 shrink-0 rotate-90 text-faint lg:hidden"
                        />
                      </>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Terminal state */}
          <div className="hairline-t flex items-center justify-between gap-3 bg-ink-900 px-5 py-4">
            <span className="flex items-center gap-2 text-sm text-paper">
              <span className="flex size-5 items-center justify-center rounded-full bg-cobalt-500/20 text-cobalt-400">
                <CheckIcon aria-hidden className="size-3" strokeWidth={2.5} />
              </span>
              Sent to CRM
            </span>
            <span className="type-label text-faint">
              {run.stats[run.stats.length - 1].value} priority leads routed
            </span>
          </div>
        </ProductFrame>
      </div>
    </div>
  );
}
