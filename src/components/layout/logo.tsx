import Link from "next/link";

import { cn } from "@/lib/cn";

/**
 * Wordmark with a cobalt system glyph. Four bars = the four pillars, the
 * rightmost lit — the product mark, not decoration.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Jarvis — home"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-xs outline-none",
        className,
      )}
    >
      <svg
        viewBox="0 0 20 20"
        aria-hidden
        className="size-5 shrink-0 overflow-visible"
      >
        <rect x="0" y="6" width="3" height="8" rx="1.5" fill="currentColor" opacity="0.35" />
        <rect x="5" y="3" width="3" height="14" rx="1.5" fill="currentColor" opacity="0.55" />
        <rect x="10" y="5" width="3" height="10" rx="1.5" fill="currentColor" opacity="0.75" />
        <rect
          x="15"
          y="1"
          width="3"
          height="18"
          rx="1.5"
          className="fill-cobalt-500 transition-colors duration-200 ease-standard group-hover:fill-cobalt-400"
        />
      </svg>
      <span className="font-display text-[17px] font-medium tracking-[-0.02em] text-paper">
        Jarvis
      </span>
    </Link>
  );
}
