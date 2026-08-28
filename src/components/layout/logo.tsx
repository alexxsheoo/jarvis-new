import Link from "next/link";

import { JarvisMark } from "@/components/brand/jarvis-mark";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** Off inside dense chrome where a breathing mark would be noise. */
  animated?: boolean;
};

/**
 * Lockup: neon mark + wordmark. The mark carries the only ambient motion in
 * the header — everything else there stays still.
 */
export function Logo({ className, animated = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Jarvis — home"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-xs outline-none",
        className,
      )}
    >
      <JarvisMark animated={animated} className="size-5 shrink-0" />
      <span className="font-display text-[17px] font-medium tracking-[-0.02em] text-paper transition-[text-shadow] duration-300 ease-standard group-hover:[text-shadow:0_0_16px_rgba(70,217,245,0.45)]">
        Jarvis
      </span>
    </Link>
  );
}
