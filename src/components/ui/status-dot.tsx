import { cn } from "@/lib/cn";

const tones = {
  ok: "bg-ok",
  warn: "bg-warn",
  alert: "bg-alert",
  brand: "bg-cobalt-500",
  idle: "bg-faint",
} as const;

type StatusDotProps = {
  tone?: keyof typeof tones;
  className?: string;
  /** Accessible label; omit when adjacent text already names the state. */
  label?: string;
};

export function StatusDot({ tone = "ok", className, label }: StatusDotProps) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "inline-block size-1.5 shrink-0 rounded-full",
        tones[tone],
        className,
      )}
    />
  );
}
