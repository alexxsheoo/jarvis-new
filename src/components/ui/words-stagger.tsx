"use client";

import { stagger as staggerWords, useAnimate, useInView } from "motion/react";
import { Fragment, useEffect } from "react";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/use-reduced-motion";

import styles from "./words-stagger.module.css";

export interface WordsStaggerProps {
  /** Plain text; keep heading semantics and inline styling in the parent. */
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  speed?: number;
  autoStart?: boolean;
  onStart?: () => void;
  onComplete?: () => void;
  inView?: boolean;
  once?: boolean;
}

/**
 * Adapted from the supplied WordsStagger effect. Normal inline flow preserves
 * the site's typography and wrapping. SSR renders readable text; animation is
 * a post-hydration enhancement, with a single reading for assistive technology.
 */
export function WordsStagger({
  children,
  className,
  delay = 0,
  stagger = 0.055,
  speed = 0.45,
  autoStart = true,
  onStart,
  onComplete,
  inView = false,
  once = true,
}: WordsStaggerProps) {
  const [scope, animate] = useAnimate<HTMLSpanElement>();
  const visible = useInView(scope, { once, amount: 0.25 });
  const reduced = useReducedMotion();
  const shouldAnimate = autoStart && (!inView || visible);
  const parts = children.split(/(\s+)/);

  useEffect(() => {
    // Check the live preference too: the hydration-safe hook intentionally
    // reports its server snapshot on the first client render.
    if (
      !shouldAnimate ||
      reduced ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !children.trim()
    ) {
      return;
    }

    let cancelled = false;
    onStart?.();
    const controls = animate(
      "[data-stagger-word]",
      { opacity: [0, 1], y: [6, 0], filter: ["blur(4px)", "blur(0px)"] },
      {
        duration: Math.max(0, speed),
        delay: staggerWords(Math.max(0, stagger), {
          startDelay: Math.max(0, delay),
        }),
        ease: "easeOut",
      },
    );

    void controls.then(() => {
      if (!cancelled) onComplete?.();
    });

    return () => {
      cancelled = true;
      // A stopped or interrupted entrance must leave the words readable.
      controls.complete();
    };
  }, [
    animate,
    children,
    delay,
    onComplete,
    onStart,
    reduced,
    shouldAnimate,
    speed,
    stagger,
  ]);

  return (
    <span ref={scope} className={cn(styles.words, className)}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">
        {parts.map((part, index) =>
          /\S/.test(part) ? (
            <span key={index} data-stagger-word className={styles.word}>
              {part}
            </span>
          ) : (
            <Fragment key={index}>{part}</Fragment>
          ),
        )}
      </span>
    </span>
  );
}

export default WordsStagger;
