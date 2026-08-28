"use client";

import { motion } from "motion/react";
import { CheckIcon, MinusIcon } from "lucide-react";
import Link from "next/link";

import { CountUp } from "@/components/motion/count-up";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { jarvisPrice, stackRows, stackTotal } from "@/content/stack";
import { site } from "@/content/site";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const viewport = { once: true, margin: "-60px" } as const;

export function StackComparison() {
  const reduced = useReducedMotion();

  // Reduced motion keeps the same markup and simply removes the delay/duration,
  // so SSR and the first client render are byte-identical either way.
  const rowTransition = (index: number) =>
    reduced
      ? { duration: 0 }
      : {
          duration: 0.32,
          delay: Math.min(index * 0.035, 0.5),
          ease: [0.2, 0.8, 0.2, 1] as const,
        };

  return (
    <Section id="stack" tone="alt">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="The stack"
          title={
            <>
              Replace the Stack.
              <br />
              Keep the System.
            </>
          }
          description="Your CRM should not require six other subscriptions just to run your sales process. Jarvis brings the core revenue workflow into one connected system."
        />

        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <caption className="sr-only">
              Capabilities in a typical fragmented software stack compared with
              Jarvis, with illustrative example monthly costs.
            </caption>
            <thead>
              <tr className="bg-ink-850">
                {["Capability", "Typical tool stack", "Est. monthly cost", "Jarvis"].map(
                  (heading, index) => (
                    <th
                      key={heading}
                      scope="col"
                      className={`px-4 py-3.5 type-label-wide text-faint ${
                        index >= 2 ? "text-right" : ""
                      } ${index === 3 ? "w-24" : ""}`}
                    >
                      {heading}
                    </th>
                  ),
                )}
              </tr>
            </thead>

            <tbody>
              {stackRows.map((row, index) => (
                <motion.tr
                  key={row.capability}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={rowTransition(index)}
                  className="border-t border-line"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 text-sm font-medium text-paper"
                  >
                    {row.capability}
                  </th>
                  <td className="px-4 py-3 text-sm text-muted">{row.vendor}</td>
                  <td className="px-4 py-3 text-right type-metric text-sm text-muted">
                    ${row.cost}
                  </td>
                  <td className="px-4 py-3">
                    <span className="flex justify-end">
                      {row.jarvis ? (
                        <motion.span
                          initial={{ scale: 0.4, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={viewport}
                          transition={
                            reduced
                              ? { duration: 0 }
                              : {
                                  duration: 0.28,
                                  delay: Math.min(index * 0.035 + 0.1, 0.6),
                                  ease: [0.2, 0.8, 0.2, 1],
                                }
                          }
                          className="flex size-5 items-center justify-center rounded-full bg-cobalt-500/15 text-cobalt-400"
                        >
                          <CheckIcon aria-hidden className="size-3" strokeWidth={2.5} />
                          <span className="sr-only">Included in Jarvis</span>
                        </motion.span>
                      ) : (
                        <span className="flex size-5 items-center justify-center text-faint">
                          <MinusIcon aria-hidden className="size-3" />
                          <span className="sr-only">Not included</span>
                        </span>
                      )}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-2 rounded-lg border border-line bg-ink-950 p-6">
            <span className="font-mono text-eyebrow text-faint uppercase">
              Typical fragmented stack
            </span>
            <CountUp
              value={stackTotal}
              prefix="$"
              suffix="+ / month"
              className="type-metric text-h2 text-muted"
            />
            <span className="text-xs text-faint">
              Sum of the example costs above.
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 0.45, delay: 0.75, ease: [0.2, 0.8, 0.2, 1] }
            }
            className="flex flex-col gap-2 rounded-lg border border-cobalt-500/50 bg-cobalt-glow p-6"
          >
            <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
              Jarvis Core
            </span>
            <span className="type-metric text-h2 text-paper">
              Starting from ${jarvisPrice}/month
            </span>
            <span className="text-xs text-muted">
              One system, one subscription, one record of truth.
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[62ch] text-xs leading-relaxed text-faint">
            Third-party costs shown are{" "}
            <span className="text-muted">illustrative examples</span> for generic
            tool categories, not verified pricing for any named product. Your
            actual stack cost will differ.
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
