import { DatabaseIcon, PlayIcon } from "lucide-react";

import { StatusDot } from "@/components/ui/status-dot";
import { cn } from "@/lib/cn";

/**
 * Lead Scraper, shown as the product it is rather than a feature tile.
 *
 * The counts fall through the funnel — found, cleaned, deduplicated, scored —
 * so the pipeline visibly does something. Illustrative figures for a county
 * pull, not measured output.
 */
const source = [
  { label: "County", value: "Bexar, TX" },
  { label: "Record type", value: "Probate + Tax delinquent" },
  { label: "Window", value: "Last 90 days" },
];

type Stage = {
  label: string;
  count: string;
  note: string;
  /** Terminal stage gets the live treatment. */
  live?: boolean;
};

const stages: Stage[] = [
  { label: "County records", count: "48,210", note: "Public filings scanned" },
  { label: "Records found", count: "12,480", note: "Matched your criteria" },
  { label: "Clean", count: "11,902", note: "Addresses normalised" },
  { label: "Enrich", count: "11,902", note: "Owner, phone, mailing" },
  { label: "Deduplicate", count: "9,347", note: "Duplicate parcels merged" },
  { label: "Score", count: "2,118", note: "Graded A and B" },
  { label: "Route to CRM", count: "2,118", note: "Assigned to owners", live: true },
];

export function LeadScraper() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-line-strong bg-line lg:grid-cols-[16rem_1fr]">
      {/* Source rail — the thing you configure before a run. */}
      <div className="flex flex-col gap-5 bg-ink-900 p-5">
        <span className="flex items-center gap-2 type-label-wide text-muted">
          <DatabaseIcon aria-hidden className="size-3.5 text-neon-400" strokeWidth={1.5} />
          Source
        </span>

        <dl className="flex flex-col gap-3.5">
          {source.map((field) => (
            <div key={field.label} className="flex flex-col gap-1">
              <dt className="type-label text-faint">{field.label}</dt>
              <dd className="text-sm text-paper">{field.value}</dd>
            </div>
          ))}
        </dl>

        <span className="hairline-t flex items-center justify-between gap-2 pt-4">
          <span className="flex items-center gap-2 type-label text-neon-400">
            <PlayIcon aria-hidden className="size-3" strokeWidth={2} />
            Run active
          </span>
          <span className="type-metric text-[11px] text-faint">04:12</span>
        </span>
      </div>

      {/* Pipeline — one row per stage, counts falling through it. */}
      <div className="bg-ink-850 p-5">
        <span className="flex items-center justify-between gap-4">
          <span className="type-label-wide text-faint">Pipeline</span>
          <span className="type-label text-faint">Records</span>
        </span>

        <ol className="mt-4 flex flex-col">
          {stages.map((stage, index) => (
            <li key={stage.label} className="flex gap-4">
              {/* Rail: node plus the connector down to the next stage. */}
              <span aria-hidden className="flex flex-col items-center">
                <span
                  className={cn(
                    "mt-1.5 size-2 shrink-0 rounded-full",
                    stage.live ? "bg-neon-400" : "bg-cobalt-500",
                  )}
                />
                {index < stages.length - 1 ? (
                  <span
                    className={cn(
                      "w-px flex-1",
                      // The travelling light only runs on the segment that is
                      // moving records right now; the rest are static rails.
                      stage.live ? "bg-line-strong" : "jarvis-flow-line",
                    )}
                    style={{ animationDuration: `${2.4 + index * 0.35}s` }}
                  />
                ) : null}
              </span>

              <span
                className={cn(
                  "flex flex-1 items-baseline justify-between gap-4",
                  index < stages.length - 1 && "pb-5",
                )}
              >
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="flex items-center gap-2">
                    <span className="truncate text-sm font-medium text-paper">
                      {stage.label}
                    </span>
                    {stage.live ? (
                      <StatusDot tone="live" className="jarvis-status text-neon-400" />
                    ) : null}
                  </span>
                  <span className="truncate text-xs text-faint">{stage.note}</span>
                </span>
                <span
                  className={cn(
                    "type-metric shrink-0 text-sm",
                    stage.live ? "text-neon-400" : "text-muted",
                  )}
                >
                  {stage.count}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
