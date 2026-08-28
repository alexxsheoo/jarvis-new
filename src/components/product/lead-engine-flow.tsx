"use client";

import { motion } from "motion/react";
import { useEffect, useId, useState } from "react";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const stages = [
  { name: "Source", detail: "County records", output: "1,284 raw" },
  { name: "Clean", detail: "Normalize fields", output: "1,284 parsed" },
  { name: "Enrich", detail: "Phones & owners", output: "1,109 enriched" },
  { name: "Dedupe", detail: "Against CRM", output: "947 unique" },
  { name: "Score", detail: "Fit & intent", output: "312 priority" },
  { name: "Route", detail: "To the owner", output: "312 assigned" },
];

export function LeadEngineFlow() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  // This component renders in more than one place on a page; a shared layoutId
  // would make Motion animate the token between instances.
  const tokenId = useId();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % stages.length),
      1800,
    );
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div className="flex flex-col gap-4">
      <ol className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {stages.map((stage, index) => {
          // Reduced motion freezes on the finished run rather than blanking the
          // diagram — the counts still read as a completed pass.
          const current = reduced ? stages.length - 1 : active;
          const isActive = index === current;
          const isDone = index < current;

          return (
            <li key={stage.name} className="relative">
              {/* Connector: fills as the batch passes through. */}
              {index > 0 ? (
                <span
                  aria-hidden
                  className="absolute top-1/2 -left-3 hidden h-px w-3 bg-line lg:block"
                >
                  <motion.span
                    className="block h-px bg-cobalt-500"
                    initial={false}
                    animate={{ scaleX: isDone || isActive ? 1 : 0 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              ) : null}

              <div
                className={cn(
                  "flex h-full flex-col gap-2 rounded-md border p-3 transition-colors duration-300",
                  isActive
                    ? "border-cobalt-500/50 bg-cobalt-glow"
                    : "border-line bg-ink-850",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "font-mono text-[11px] tracking-[0.06em] uppercase",
                      isActive ? "text-cobalt-400" : "text-faint",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {isActive ? (
                    <motion.span
                      layoutId={`engine-token-${tokenId}`}
                      className="size-1.5 rounded-full bg-cobalt-400"
                      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                    />
                  ) : null}
                </div>

                <p className="text-sm font-medium text-paper">{stage.name}</p>
                <p className="text-xs leading-snug text-muted">{stage.detail}</p>
                <p
                  className={cn(
                    "mt-auto font-mono text-[11px] tabular-nums",
                    isActive || isDone ? "text-cobalt-400" : "text-faint",
                  )}
                >
                  {stage.output}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="font-mono text-[11px] text-faint">
        Runs nightly · 1,284 records in · 312 routed to owners
      </p>
    </div>
  );
}
