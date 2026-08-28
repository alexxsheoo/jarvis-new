import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = ComponentProps<"div"> & {
  /** `wide` for product frames that need more breathing room. */
  width?: "default" | "wide" | "narrow";
};

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

export function Container({
  className,
  width = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-6 md:px-8", widths[width], className)}
      {...props}
    />
  );
}
