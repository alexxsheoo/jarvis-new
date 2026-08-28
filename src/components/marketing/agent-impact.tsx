"use client";

import { motion } from "motion/react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { impactRows, type ImpactRow } from "@/content/ai-agent";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const viewport = { once: true, margin: "-60px" } as const;

const impactTone: Record<ImpactRow["impact"], string> = {
  "Very high": "border-ok/25 bg-ok/10 text-ok",
  High: "border-cobalt-500/30 bg-cobalt-glow text-cobalt-400",
  Medium: "border-line-strong bg-ink-800 text-muted",
};

const headings = [
  { label: "Measure", align: "left" },
  { label: "Without AI staff", align: "right" },
  { label: "With AI staff", align: "right" },
  { label: "Revenue impact", align: "center" },
  { label: "Est. monthly range", align: "right" },
] as const;

export function AgentImpact() {
  const reduced = useReducedMotion();

  // Same markup in both cases — reduced motion only drops delay and duration,
  // so server and first client render stay identical.
  const rowTransition = (index: number) =>
    reduced
      ? { duration: 0 }
      : {
          duration: 0.32,
          delay: Math.min(index * 0.06, 0.5),
          ease: [0.2, 0.8, 0.2, 1] as const,
        };

  return (
    <Section id="impact" tone="alt">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="The difference"
          title="Where the leads actually go"
          description="Most lost deals are not lost on price. They are lost in the gap between a lead arriving and anyone answering it."
        />

        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[52rem] border-collapse text-left">
            <caption className="sr-only">
              Illustrative comparison of coverage without AI staff and with
              Jarvis AI staff, with example monthly revenue impact ranges.
            </caption>
            <thead>
              <tr className="bg-ink-850">
                {headings.map((heading) => (
                  <th
                    key={heading.label}
                    scope="col"
                    className={cn(
                      "px-4 py-3.5 font-mono text-[11px] tracking-[0.08em] text-faint uppercase",
                      heading.align === "right" && "text-right",
                      heading.align === "center" && "text-center",
                      // The impact column is the one to read — tint the whole
                      // column rather than decorating every cell in it.
                      heading.label === "Revenue impact" &&
                        "bg-cobalt-glow text-cobalt-400",
                    )}
                  >
                    {heading.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {impactRows.map((row, index) => (
                <motion.tr
                  key={row.measure}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={rowTransition(index)}
                  className="border-t border-line"
                >
                  <th
                    scope="row"
                    className="px-4 py-3.5 text-sm font-medium text-paper"
                  >
                    {row.measure}
                  </th>
                  <td className="px-4 py-3.5 text-right font-mono text-sm tabular-nums text-muted">
                    {row.without}
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono text-sm tabular-nums text-neon-400">
                    {row.withAgent}
                  </td>
                  <td className="bg-cobalt-glow px-4 py-3.5 text-center">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.86 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewport}
                      transition={
                        reduced
                          ? { duration: 0 }
                          : {
                              duration: 0.28,
                              delay: Math.min(index * 0.06 + 0.12, 0.6),
                              ease: [0.2, 0.8, 0.2, 1],
                            }
                      }
                      className={cn(
                        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none tracking-[0.06em] uppercase",
                        impactTone[row.impact],
                      )}
                    >
                      {row.impact}
                    </motion.span>
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono text-sm tabular-nums text-muted">
                    {row.range}
                    <span className="text-faint"> / mo</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[62ch] text-xs leading-relaxed text-faint">
            Figures above are{" "}
            <span className="text-muted">illustrative examples</span>, not
            measured results, benchmark data, or a revenue forecast. The
            &ldquo;without&rdquo; column is industry-shaped and the ranges show
            how to frame impact — your own numbers will differ.
          </p>
          <Link
            href={site.cta.primary.href}
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            {site.cta.primary.label}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
