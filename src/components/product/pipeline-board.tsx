"use client";

import { motion } from "motion/react";
import { useEffect, useId, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const columns = [
  {
    name: "New",
    leads: [
      { name: "M. Alvarez", meta: "Inbound · form" },
      { name: "Northbank LLC", meta: "Inbound · call" },
    ],
  },
  {
    name: "Qualified",
    leads: [{ name: "T. Okafor", meta: "Scored 82" }],
  },
  {
    name: "Booked",
    leads: [{ name: "Aster Group", meta: "Thu 10:30" }],
  },
  {
    name: "Offer",
    leads: [{ name: "R. Whitfield", meta: "$284,000" }],
  },
];

/** The lead that moves, demonstrating pipeline movement rather than decorating it. */
const travelling = { name: "J. Renner", meta: "Auto-advanced" };

export function PipelineBoard() {
  const reduced = useReducedMotion();
  const [position, setPosition] = useState(0);
  const cardId = useId();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setPosition((p) => (p + 1) % columns.length),
      2800,
    );
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {columns.map((column, index) => (
        <div key={column.name} className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.06em] text-faint uppercase">
              {column.name}
            </span>
            <span className="font-mono text-[11px] tabular-nums text-faint">
              {column.leads.length + (position === index ? 1 : 0)}
            </span>
          </div>

          <div className="flex min-h-32 flex-col gap-2 rounded-md border border-line bg-ink-900/60 p-2">
            {position === index ? (
              <motion.div
                layout
                layoutId={`travelling-lead-${cardId}`}
                transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
                className="rounded-sm border border-cobalt-500/40 bg-cobalt-glow p-2.5"
              >
                <p className="text-xs font-medium text-paper">
                  {travelling.name}
                </p>
                <p className="mt-1 font-mono text-[11px] text-cobalt-400">
                  {travelling.meta}
                </p>
              </motion.div>
            ) : null}

            {column.leads.map((lead) => (
              <div
                key={lead.name}
                className="rounded-sm border border-line bg-ink-850 p-2.5"
              >
                <p className="text-xs font-medium text-paper">{lead.name}</p>
                <p className="mt-1 font-mono text-[11px] text-faint">
                  {lead.meta}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="col-span-2 flex items-center gap-2 lg:col-span-4">
        <Badge tone="brand">Auto-advance</Badge>
        <span className="text-xs text-faint">
          Stage rules move records without anyone dragging a card.
        </span>
      </div>
    </div>
  );
}
