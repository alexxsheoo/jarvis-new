import type { ReactNode } from "react";

import { StatusDot } from "@/components/ui/status-dot";
import { cn } from "@/lib/cn";

type ProductFrameProps = {
  /** Breadcrumb shown in the frame chrome, e.g. `Pipelines / Acquisitions`. */
  label: string;
  status?: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
};

/**
 * Chrome around every product view. The breadcrumb and live badge are what
 * make a static panel read as a real screen rather than an illustration.
 */
export function ProductFrame({
  label,
  status = "Live",
  children,
  className,
  bodyClassName,
}: ProductFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-line-strong bg-ink-900 shadow-raised",
        className,
      )}
    >
      <div className="hairline-b flex items-center justify-between gap-4 bg-ink-850 px-4 py-2.5">
        <span className="truncate font-mono text-[11px] tracking-[0.06em] text-faint uppercase">
          {label}
        </span>
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
          {/* `text-ok` supplies currentColor for the expanding ring. */}
          <StatusDot tone="ok" className="jarvis-status text-ok" />
          {status}
        </span>
      </div>
      <div className={cn("p-4 md:p-5", bodyClassName)}>{children}</div>
    </div>
  );
}
