"use client";

import { motion } from "motion/react";
import {
  CheckIcon,
  MailIcon,
  SearchIcon,
  SplitIcon,
  UserCheckIcon,
  ZapIcon,
} from "lucide-react";
import { useEffect, useId, useState } from "react";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const nodes = [
  { id: "trigger", label: "New lead", kind: "Trigger", icon: ZapIcon },
  { id: "enrich", label: "Enrich record", kind: "Action", icon: SearchIcon },
  { id: "route", label: "Route by score", kind: "Branch", icon: SplitIcon },
  { id: "approve", label: "Owner approves", kind: "Human", icon: UserCheckIcon },
  { id: "send", label: "Send offer", kind: "Action", icon: MailIcon },
  { id: "done", label: "Complete", kind: "End", icon: CheckIcon },
];

export function WorkflowCanvas() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  // Rendered both standalone and inside the pillar tabs — keep tokens distinct.
  const tokenId = useId();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setStep((s) => (s + 1) % (nodes.length + 1)), 1500);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div className="grid-field relative rounded-md border border-line bg-ink-900/60 p-4 md:p-6">
      <ol className="relative flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-5">
        {nodes.map((node, index) => {
          // Reduced motion shows the run already completed.
          const current = reduced ? nodes.length : step;
          const isActive = index === current;
          const isDone = index < current;
          const isHuman = node.kind === "Human";

          return (
            <li key={node.id} className="relative">
              <div
                className={cn(
                  "flex items-center gap-3 rounded-md border bg-ink-850 p-3 transition-colors duration-300",
                  isActive && "border-cobalt-500/60 bg-cobalt-glow",
                  isDone && "border-line-strong",
                  !isActive && !isDone && "border-line",
                  isHuman && !isActive && "border-dashed",
                )}
              >
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-sm border transition-colors duration-300",
                    isActive
                      ? "border-cobalt-500/50 text-cobalt-400"
                      : isDone
                        ? "border-line-strong text-ok"
                        : "border-line text-faint",
                  )}
                >
                  {isDone ? (
                    <CheckIcon aria-hidden className="size-4" strokeWidth={1.5} />
                  ) : (
                    <node.icon aria-hidden className="size-4" strokeWidth={1.5} />
                  )}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-paper">
                    {node.label}
                  </span>
                  <span
                    className={cn(
                      "block font-mono text-[11px] tracking-[0.06em] uppercase",
                      isHuman ? "text-warn" : "text-faint",
                    )}
                  >
                    {node.kind}
                  </span>
                </span>

                {isActive ? (
                  <motion.span
                    layoutId={`workflow-token-${tokenId}`}
                    className="size-1.5 shrink-0 rounded-full bg-cobalt-400"
                    transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] text-faint">
        <span className="text-warn">Human</span>
        <span>steps pause the run until a person approves.</span>
      </p>
    </div>
  );
}
