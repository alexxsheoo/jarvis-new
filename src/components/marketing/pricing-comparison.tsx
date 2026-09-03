"use client";

import { CheckIcon, MinusIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Fragment } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  pricingGroups,
  pricingPlans,
  type PlanCell,
} from "@/content/pricing";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const viewport = { once: true, margin: "-60px" } as const;

function Cell({ value, featured }: { value: PlanCell; featured: boolean }) {
  if (typeof value !== "boolean") {
    return (
      <span className={cn("text-sm", featured ? "text-paper" : "text-muted")}>
        {value}
      </span>
    );
  }

  return value ? (
    <span
      className={cn(
        "mx-auto flex size-5 items-center justify-center rounded-full",
        featured ? "bg-cobalt-500/20 text-cobalt-400" : "bg-ink-800 text-muted",
      )}
    >
      <CheckIcon aria-hidden className="size-3" strokeWidth={2.5} />
      <span className="sr-only">Included</span>
    </span>
  ) : (
    <span className="mx-auto flex size-5 items-center justify-center text-faint">
      <MinusIcon aria-hidden className="size-3" />
      <span className="sr-only">Not included</span>
    </span>
  );
}

/**
 * Plan comparison. Structure follows `StackComparison` — grouped sections, one
 * column per plan, the recommended column tinted the whole way down rather than
 * decorated cell by cell, and a CTA row closing each column.
 *
 * Rebuilt in this design system rather than copied: the source component reads
 * shadcn semantic tokens (`bg-background`, `text-muted-foreground`, `bg-primary`)
 * that this project does not define, so it would have rendered unstyled.
 */
export function PricingComparison() {
  return (
    <Section id="compare">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Compare plans"
          title="What each plan carries"
          description="Every plan runs the same operating layer. The difference is how much of the deal flow and coaching comes with it."
        />

        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <caption className="sr-only">
              Jarvis plan comparison: features included in Basic, Elite, and
              Premium.
            </caption>
            <thead>
              <tr className="bg-ink-850">
                <th scope="col" className="w-[34%] px-4 py-4 align-bottom">
                  <span className="type-label-wide text-faint">Features</span>
                </th>
                {pricingPlans.map((plan) => (
                  <th
                    key={plan.name}
                    scope="col"
                    className={cn(
                      "px-4 py-4 text-center align-bottom",
                      plan.featured && "bg-cobalt-glow",
                    )}
                  >
                    <span className="flex flex-col items-center gap-1">
                      {plan.featured ? (
                        <span className="mb-1 inline-flex items-center rounded-full border border-cobalt-500/30 bg-cobalt-500/10 px-2 py-0.5 type-label text-cobalt-400">
                          Most popular
                        </span>
                      ) : null}
                      <span className="font-display text-base font-medium text-paper">
                        {plan.name}
                      </span>
                      <span className="type-metric text-h3 text-paper">
                        {plan.price}
                      </span>
                      <span className="type-label text-faint">
                        {plan.cadence}
                      </span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {pricingGroups.map((group, groupIndex) => (
                <Fragment key={group.section}>
                  <tr className="border-t border-line bg-ink-900">
                    <th
                      scope="colgroup"
                      colSpan={4}
                      className="px-4 py-2.5 text-left type-label-wide text-muted"
                    >
                      {group.section}
                    </th>
                  </tr>

                  {group.features.map((feature, featureIndex) => (
                    <motion.tr
                      key={feature.label}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{
                        duration: 0.3,
                        delay: Math.min(
                          (groupIndex * 4 + featureIndex) * 0.03,
                          0.4,
                        ),
                        ease: [0.2, 0.8, 0.2, 1],
                      }}
                      className="border-t border-line"
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 text-sm font-normal text-muted"
                      >
                        {feature.label}
                      </th>
                      {feature.values.map((value, i) => (
                        <td
                          key={pricingPlans[i].name}
                          className={cn(
                            "px-4 py-3 text-center",
                            pricingPlans[i].featured && "bg-cobalt-glow",
                          )}
                        >
                          <Cell
                            value={value}
                            featured={pricingPlans[i].featured}
                          />
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </Fragment>
              ))}

              <tr className="border-t border-line">
                <td className="px-4 py-5" />
                {pricingPlans.map((plan) => (
                  <td
                    key={`cta-${plan.name}`}
                    className={cn(
                      "px-4 py-5 text-center",
                      plan.featured && "bg-cobalt-glow",
                    )}
                  >
                    <Link
                      href={site.cta.primary.href}
                      className={cn(
                        buttonVariants({
                          variant: plan.featured ? "primary" : "secondary",
                          size: "sm",
                        }),
                        "w-full",
                      )}
                    >
                      Choose {plan.name}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
