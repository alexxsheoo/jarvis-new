"use client";

import { motion } from "motion/react";

import type { CostComparison } from "@/content/cost-comparison";
import { offers } from "@/content/products";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const byId = Object.fromEntries(offers.map((offer) => [offer.id, offer]));
const viewport = { once: true, margin: "-60px" } as const;

/**
 * One cost comparison: the two headline costs side by side, then the
 * row-by-row difference. Shared by the tabbed homepage section and the
 * product pages, which each show only their own comparison.
 *
 * No section, heading, or disclaimer here — the caller decides how the panel
 * is introduced, since the homepage tabs and a product page frame it
 * differently.
 */
export function CostComparisonPanel({
  comparison,
}: {
  comparison: CostComparison;
}) {
  const offer = byId[comparison.offerId];
  const reduced = useReducedMotion();

  return (
    <div className="flex flex-col gap-6">
      {/* Headline costs, side by side. */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-lg border border-line bg-ink-950 p-6">
          <span className="type-label text-faint">
            {comparison.alternative.label}
          </span>
          <span className="type-metric text-h2 text-muted">
            {comparison.alternative.cost}
          </span>
          <span className="text-xs leading-relaxed text-faint">
            {comparison.alternative.costNote}
          </span>
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-cobalt-500/50 bg-cobalt-glow p-6">
          <span className="type-label text-cobalt-400">
            {comparison.offer.label}
          </span>
          <span className="type-metric text-h2 text-paper">
            {comparison.offer.cost}
          </span>
          <span className="text-xs leading-relaxed text-muted">
            {comparison.offer.costNote}
          </span>
        </div>
      </div>

      {/* Row-by-row difference. */}
      <div className="overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[44rem] border-collapse text-left">
          <caption className="sr-only">
            {comparison.title}: the conventional approach compared with{" "}
            {offer.name}.
          </caption>
          <thead>
            <tr className="bg-ink-850">
              <th scope="col" className="w-[22%] px-4 py-3.5 type-label-wide text-faint">
                Measure
              </th>
              <th scope="col" className="px-4 py-3.5 type-label-wide text-faint">
                {comparison.alternative.label}
              </th>
              <th
                scope="col"
                className="bg-cobalt-glow px-4 py-3.5 type-label-wide text-cobalt-400"
              >
                {offer.name}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, index) => (
              <motion.tr
                key={row.measure}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={
                  reduced
                    ? { duration: 0 }
                    : {
                        duration: 0.3,
                        delay: Math.min(index * 0.05, 0.35),
                        ease: [0.2, 0.8, 0.2, 1],
                      }
                }
                className="border-t border-line"
              >
                <th scope="row" className="px-4 py-3.5 text-sm font-medium text-paper">
                  {row.measure}
                </th>
                <td className="px-4 py-3.5 text-sm text-muted">
                  {row.alternative}
                </td>
                <td className="bg-cobalt-glow px-4 py-3.5 text-sm text-paper">
                  {row.offer}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
