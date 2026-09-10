"use client";

import {
  Columns3Icon,
  LayoutGridIcon,
  PauseIcon,
  PlayIcon,
  QuoteIcon,
} from "lucide-react";
import Image from "next/image";
import { useId, useState, type CSSProperties } from "react";

import { Button } from "@/components/ui/button";
import type { Testimonial } from "@/content/testimonials";
import { useReducedMotion } from "@/lib/use-reduced-motion";

import styles from "./testimonial-v2.module.css";

type TestimonialCardsProps = {
  testimonials: Testimonial[];
  isSample?: boolean;
};

function TestimonialCard({
  testimonial,
  isSample,
}: {
  testimonial: Testimonial;
  isSample: boolean;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <li tabIndex={0} className={styles.card}>
      <figure className="flex h-full flex-col gap-6">
        <div className="flex items-center justify-between gap-3">
          <QuoteIcon
            aria-hidden
            className="size-6 text-cobalt-400"
            strokeWidth={1.5}
          />
          {isSample ? (
            <span className="font-mono text-xs text-muted">Sample quote</span>
          ) : null}
        </div>
        <blockquote className="flex-1 text-base leading-relaxed text-paper">
          <p>{testimonial.quote}</p>
        </blockquote>
        <figcaption className="flex items-center gap-3 border-t border-line pt-5">
          <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-hud bg-ink-800 font-mono text-sm text-neon-300">
            {testimonial.image && !imageFailed ? (
              <Image
                src={testimonial.image}
                alt=""
                width={44}
                height={44}
                unoptimized
                className="size-full object-cover"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <span aria-hidden>
                {testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join("")}
              </span>
            )}
          </span>
          <span className="flex min-w-0 flex-col gap-1">
            <span className="text-sm font-semibold text-paper">
              {testimonial.name}
            </span>
            <span className="text-xs leading-relaxed text-muted">
              {testimonial.role}
              {testimonial.company ? ` · ${testimonial.company}` : ""}
            </span>
          </span>
        </figcaption>
      </figure>
    </li>
  );
}

/** The supplied column design, scoped to Jarvis and safe on the first SSR render. */
export default function TestimonialCards({
  testimonials,
  isSample = false,
}: TestimonialCardsProps) {
  const cardsId = useId();
  const [paused, setPaused] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const reduced = useReducedMotion();
  const staticView = showAll || reduced || testimonials.length < 3;
  const perColumn = Math.ceil(testimonials.length / 3);
  const columns = Array.from(
    { length: Math.min(3, testimonials.length) },
    (_, index) =>
      testimonials.slice(index * perColumn, (index + 1) * perColumn),
  ).filter((column) => column.length > 0);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <span className="font-mono text-xs text-muted">
          {testimonials.length} {isSample ? "sample cards" : "customer stories"}
        </span>
        <div className={styles.motionControls}>
          {!staticView ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setPaused((value) => !value)}
              aria-controls={cardsId}
              aria-pressed={paused}
            >
              {paused ? (
                <PlayIcon aria-hidden className="size-3.5" />
              ) : (
                <PauseIcon aria-hidden className="size-3.5" />
              )}
              {paused ? "Resume scrolling" : "Pause scrolling"}
            </Button>
          ) : null}
          {!reduced && testimonials.length >= 3 ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowAll((value) => !value)}
              aria-controls={cardsId}
              aria-pressed={showAll}
            >
              {showAll ? (
                <Columns3Icon aria-hidden className="size-3.5" />
              ) : (
                <LayoutGridIcon aria-hidden className="size-3.5" />
              )}
              {showAll ? "Scrolling view" : "Read all testimonials"}
            </Button>
          ) : null}
        </div>
      </div>

      <div
        id={cardsId}
        role="region"
        aria-label={
          isSample ? "Sample testimonial cards" : "Customer testimonials"
        }
        className={styles.viewport}
        data-static={staticView}
        data-paused={paused}
      >
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            <div
              className={styles.track}
              style={
                {
                  "--testimonial-duration": `${[42, 52, 46][index]}s`,
                } as CSSProperties
              }
            >
              {[false, true].map((duplicate) => (
                <ul
                  key={String(duplicate)}
                  className={duplicate ? styles.duplicate : styles.list}
                  aria-hidden={duplicate || undefined}
                  inert={duplicate || undefined}
                >
                  {column.map((testimonial, cardIndex) => (
                    <TestimonialCard
                      key={`${testimonial.name}-${cardIndex}`}
                      testimonial={testimonial}
                      isSample={isSample}
                    />
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
