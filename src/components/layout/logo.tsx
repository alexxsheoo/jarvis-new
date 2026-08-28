import Image from "next/image";
import Link from "next/link";

import wordmark from "../../../public/brand/jarvis-wordmark.png";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  /** Off inside dense chrome where a breathing mark would be noise. */
  animated?: boolean;
};

/**
 * The horizontal lockup — the bracketed wordmark bar from the Jarvis badge.
 *
 * The full badge (ring + bar) is the brand's primary mark, but its wordmark
 * turns to mush below roughly 64px tall, which no navigation bar can give it.
 * The bar alone stays legible down to ~24px, so chrome uses this and the badge
 * is reserved for surfaces with room: social cards, the favicon.
 *
 * Static import so Next derives the intrinsic size and reserves layout space —
 * a logo that shifts on load is the most visible CLS a header can have.
 */
export function Logo({ className, animated = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Jarvis — home"
      className={cn(
        "group inline-flex items-center rounded-xs outline-none",
        className,
      )}
    >
      <Image
        src={wordmark}
        alt=""
        priority
        sizes="180px"
        className={cn(
          "h-7 w-auto transition-opacity duration-200 ease-standard group-hover:opacity-90 md:h-7.5",
          animated && "jarvis-bloom",
        )}
      />
    </Link>
  );
}
