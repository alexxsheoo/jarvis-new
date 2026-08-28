import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Container } from "./container";

type SectionProps = ComponentProps<"section"> & {
  /** Alternating band colour. */
  tone?: "base" | "alt";
  bordered?: boolean;
};

export function Section({
  className,
  tone = "base",
  bordered = true,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-28",
        tone === "alt" ? "bg-ink-900" : "bg-ink-950",
        bordered && "hairline-t",
        className,
      )}
      {...props}
    />
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  actions?: ReactNode;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  actions,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "text-h2 md:text-display-md max-w-[20ch] text-balance text-paper",
          align === "center" && "max-w-[24ch]",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-[58ch] text-lg leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
      {actions ? <div className="mt-2 flex gap-3">{actions}</div> : null}
    </div>
  );
}

export { Container };
