import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react";

import { cn } from "@/lib/cn";

const kpis = [
  { label: "Pipeline value", value: "$1.42M", delta: "+12.4%", up: true },
  { label: "Booked this week", value: "38", delta: "+6", up: true },
  { label: "Avg. response", value: "42s", delta: "−18s", up: true },
  { label: "Stalled deals", value: "7", delta: "+2", up: false },
];

/**
 * Single-series magnitude chart: bar length carries the value, one hue, direct
 * labels on every bar. No legend — the heading names the series.
 */
const stages = [
  { label: "Qualified", value: 412 },
  { label: "Contacted", value: 348 },
  { label: "Booked", value: 265 },
  { label: "Offer", value: 178 },
  { label: "Won", value: 94 },
];

const max = Math.max(...stages.map((s) => s.value));

const activity = [
  { agent: "Lead Concierge", action: "Qualified inbound lead", time: "2m" },
  { agent: "Appointment Setter", action: "Booked Thu 10:30", time: "14m" },
  { agent: "Follow-Up Agent", action: "Sequence step 3 sent", time: "31m" },
  { agent: "Pipeline Coordinator", action: "Flagged stalled deal", time: "1h" },
];

export function DashboardPanel() {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line lg:grid-cols-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="flex flex-col gap-2 bg-ink-850 p-4">
            <span className="type-label text-faint">
              {kpi.label}
            </span>
            <span className="type-metric text-2xl text-paper">
              {kpi.value}
            </span>
            <span
              className={cn(
                "flex items-center gap-1 font-mono text-[11px]",
                kpi.up ? "text-ok" : "text-warn",
              )}
            >
              {kpi.up ? (
                <ArrowUpRightIcon aria-hidden className="size-3" />
              ) : (
                <ArrowDownRightIcon aria-hidden className="size-3" />
              )}
              {kpi.delta}
              <span className="text-faint">vs last week</span>
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <figure className="rounded-md border border-line bg-ink-850 p-4">
          <figcaption className="type-label text-faint">
            Deals by stage — current quarter
          </figcaption>

          <div className="relative mt-4 flex flex-col gap-3">
            {/* Recessive gridlines behind the marks. */}
            <div aria-hidden className="absolute inset-y-0 right-0 left-24 flex justify-between">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="w-px bg-line" />
              ))}
            </div>

            {stages.map((stage) => (
              <div key={stage.label} className="relative flex items-center gap-3">
                <span className="w-21 shrink-0 text-right text-xs text-muted">
                  {stage.label}
                </span>
                <div className="flex flex-1 items-center gap-2">
                  <div
                    className="h-2.5 rounded-r-xs bg-cobalt-500"
                    style={{ width: `${(stage.value / max) * 100}%` }}
                  />
                  <span className="type-metric text-xs text-muted">
                    {stage.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </figure>

        <div className="rounded-md border border-line bg-ink-850 p-4">
          <span className="flex items-center justify-between gap-2">
            <span className="type-label text-faint">
              Agent activity
            </span>
            {/* Activity indicator: agents are working right now. */}
            <span aria-hidden className="flex items-end gap-0.5">
              {[0, 1, 2].map((bar) => (
                <span
                  key={bar}
                  className="jarvis-activity block h-2.5 w-0.5 rounded-full bg-cobalt-500"
                  style={{ animationDelay: `${bar * 0.18}s` }}
                />
              ))}
            </span>
          </span>
          <ul className="mt-4 flex flex-col gap-3.5">
            {activity.map((item) => (
              <li key={item.action} className="flex flex-col gap-1">
                <span className="flex items-center justify-between gap-2">
                  <span className="truncate text-xs font-medium text-cobalt-400">
                    {item.agent}
                  </span>
                  <span className="shrink-0 font-mono text-[11px] text-faint">
                    {item.time}
                  </span>
                </span>
                <span className="text-xs leading-snug text-muted">
                  {item.action}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
