import { cn } from "@/lib/cn";

type JarvisMarkProps = {
  className?: string;
  /** Breathe the lit bar. Turn off wherever the mark sits inside dense UI. */
  animated?: boolean;
};

/**
 * The Jarvis mark: four ascending bars — the four platform pillars — rising off
 * a HUD baseline, the leading bar lit in signal cyan and the segment of
 * baseline beneath it carrying current.
 *
 * Deliberately id-free: no `<defs>`, gradients, or filters. The mark renders
 * more than once per page (header, mobile sheet, footer) and duplicated SVG ids
 * are invalid markup. Colour comes from theme classes and the bloom from a CSS
 * `drop-shadow`, so both stay themeable from `globals.css` and animate without
 * JavaScript — which also keeps this a Server Component.
 */
export function JarvisMark({ className, animated = true }: JarvisMarkProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      aria-hidden
      focusable="false"
      className={cn("overflow-visible", className)}
    >
      {/* HUD baseline the pillars stand on. */}
      <rect
        x="3.5"
        y="24.4"
        width="21"
        height="1"
        rx="0.5"
        className="fill-line-strong"
      />
      {/* The span under the lit pillar is carrying current. */}
      <rect
        x="19.4"
        y="24.4"
        width="4.2"
        height="1"
        rx="0.5"
        className="fill-neon-500"
      />

      <rect
        x="5"
        y="15"
        width="3"
        height="8"
        rx="1.5"
        className="fill-cobalt-600"
        opacity="0.55"
      />
      <rect
        x="10"
        y="11"
        width="3"
        height="12"
        rx="1.5"
        className="fill-cobalt-500"
        opacity="0.75"
      />
      <rect
        x="15"
        y="7"
        width="3"
        height="16"
        rx="1.5"
        className="fill-cobalt-400"
      />

      {/* Leading pillar: lit, bloomed, and hotter still at the tip. */}
      <g className={cn(animated && "jarvis-bloom")}>
        <rect
          x="20"
          y="3"
          width="3"
          height="20"
          rx="1.5"
          className="fill-neon-400 transition-colors duration-200 ease-standard group-hover:fill-neon-300"
        />
        <rect
          x="20"
          y="3"
          width="3"
          height="4"
          rx="1.5"
          className="fill-neon-300"
        />
      </g>
    </svg>
  );
}
