"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Alternating feature rows whose visual is revealed by scroll.
 *
 * Adapted from the supplied component. Four changes, each required here:
 *
 * 1. Hooks are no longer called inside `.map()`. The source ran useRef,
 *    useScroll, and useTransform in array maps, which this project's
 *    react-hooks/rules-of-hooks rule rejects outright. Each row is its own
 *    component that owns its own hooks.
 * 2. Imports come from `motion/react`. The project already ships `motion`;
 *    adding framer-motion would bundle the same library twice.
 * 3. The visual is a slot, not an <img> of a hotlinked stock photo. Rows here
 *    take real product UI, so nothing is fetched from a third party and
 *    nothing is a placeholder pretending to be a screenshot.
 * 4. prefers-reduced-motion renders every row at rest. The source had no
 *    handling, and a scroll-linked reveal that never fires is a blank page.
 *
 * The full-viewport intro and "The End" outro are gone — this is a section,
 * not a demo page — and rows use flex-col on narrow screens, where the
 * source's fixed flex-row with a 10rem gap overflowed.
 */

export type ParallaxFeature = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  /** Product UI, illustration — anything. Rendered inside the reveal. */
  visual: ReactNode;
  reverse?: boolean;
};

function ParallaxRow({ feature }: { feature: ParallaxFeature }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  // Hooks run unconditionally; reduced motion only decides which values are
  // applied.
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  const y = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  // Reduced motion must pass explicit rest values, not `undefined`.
  // `useReducedMotion` reports false on the first render by design (that is
  // what keeps hydration deterministic), so by the time it flips, motion has
  // already written opacity 0 and a full clip inline. Passing nothing leaves
  // those in place and the row stays invisible for exactly the people who
  // asked for less motion. Explicit rest values overwrite them.
  const textStyle = reduced ? { y: 0 } : { y };
  const visualStyle = reduced
    ? { opacity: 1, clipPath: "inset(0 0% 0 0)" }
    : { opacity, clipPath };

  return (
    <div
      ref={ref}
      className={cn(
        "flex min-h-[70vh] flex-col items-center justify-center gap-10 py-12 md:gap-16 lg:gap-24",
        feature.reverse ? "md:flex-row-reverse" : "md:flex-row",
      )}
    >
      {/* `transition-none` on both: motion writes these properties directly,
          and a CSS transition must never start on them. The global
          reduced-motion rule gives every element a 0.01ms transition-duration
          with transition-property still `all`, so without this each static
          rest value kicks off a micro-transition — and the rest state then
          depends on the animation clock advancing, which a throttled tab can
          stall at frame zero, leaving the row invisible. */}
      <motion.div
        style={textStyle}
        className="flex max-w-md flex-col gap-4 transition-none"
      >
        {feature.eyebrow ? (
          <span className="type-label-wide text-cobalt-400">{feature.eyebrow}</span>
        ) : null}
        <h3 className="font-display text-h2 text-balance text-paper">
          {feature.title}
        </h3>
        <p className="text-base leading-relaxed text-muted">
          {feature.description}
        </p>
      </motion.div>

      <motion.div
        style={visualStyle}
        className="w-full max-w-2xl transition-none will-change-[clip-path,opacity]"
      >
        {feature.visual}
      </motion.div>
    </div>
  );
}

export function ParallaxFeatureSection({
  features,
  className,
}: {
  features: ParallaxFeature[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      {features.map((feature) => (
        <ParallaxRow key={feature.id} feature={feature} />
      ))}
    </div>
  );
}

export default ParallaxFeatureSection;
