import { cn } from "@/lib/cn";

type DepthFieldProps = {
  className?: string;
  /** Dial the whole field back where it sits behind dense content. */
  intensity?: "full" | "quiet";
};

/**
 * Layered star depth. Three planes at different scales, drifting at different
 * rates against the scroll — the parallax is what reads as distance, so the
 * scales matter more than the motion and the field is complete without it.
 *
 * A Server Component on purpose: every layer is CSS, so this ships no
 * JavaScript, has no hydration surface, and cannot shift on load. The drift is
 * driven by the scroll timeline in `globals.css`, which degrades to a static
 * field where that is unsupported and is cancelled under reduced motion.
 */
export function DepthField({ className, intensity = "full" }: DepthFieldProps) {
  const quiet = intensity === "quiet";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "field-stars-far field-parallax-far absolute -inset-y-[20%] inset-x-0",
          quiet ? "opacity-40" : "opacity-70",
        )}
      />
      <div
        className={cn(
          "field-stars-mid field-parallax-mid absolute -inset-y-[20%] inset-x-0",
          quiet ? "opacity-35" : "opacity-65",
        )}
      />
      <div
        className={cn(
          "field-stars-near field-parallax-near absolute -inset-y-[20%] inset-x-0",
          quiet ? "opacity-30" : "opacity-55",
        )}
      />
    </div>
  );
}
