import type { CSSProperties } from "react";

import { cn } from "@/lib/cn";

const tones = {
  ok: "bg-ok",
  warn: "bg-warn",
  alert: "bg-alert",
  brand: "bg-cobalt-500",
  /** A system component that is up and holding work right now. */
  live: "bg-neon-400",
  idle: "bg-faint",
} as const;

type StatusDotProps = {
  tone?: keyof typeof tones;
  className?: string;
  /** Accessible label; omit when adjacent text already names the state. */
  label?: string;
  /** For `animationDelay` when a row of dots should read as staggered. */
  style?: CSSProperties;
};

export function StatusDot({
  tone = "ok",
  className,
  label,
  style,
}: StatusDotProps) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={style}
      className={cn(
        "inline-block size-1.5 shrink-0 rounded-full",
        tones[tone],
        className,
      )}
    />
  );
}
