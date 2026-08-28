"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { useReducedMotion } from "@/lib/use-reduced-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger position within a group, in seconds. */
  delay?: number;
};

/**
 * Single site-wide entrance: a short rise on first view. Deliberately the only
 * decorative motion — everything else animates to demonstrate the product.
 *
 * Always renders the same element with the same `initial`, so server and client
 * markup are identical. Reduced motion changes only the transition, collapsing
 * the rise to an instant snap rather than swapping the element out.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduced
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
