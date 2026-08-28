"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "@/lib/use-reduced-motion";

type CountUpProps = {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

/**
 * Counts to `value` when scrolled into view.
 *
 * Hydration safety: state is seeded with the FINAL value, so the server render
 * and the first client render are identical (and the real number is what ends
 * up in the HTML for crawlers and no-JS readers). The count only rewinds to
 * zero once `useInView` fires, which is always after hydration.
 */
export function CountUp({
  value,
  className,
  prefix = "",
  suffix = "",
  duration = 1.2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduced, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
