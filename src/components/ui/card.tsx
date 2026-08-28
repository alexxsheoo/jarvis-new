import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export const cardVariants = cva("rounded-lg border transition-colors", {
  variants: {
    surface: {
      base: "border-line bg-ink-850",
      raised: "border-line-strong bg-ink-800 shadow-panel",
      quiet: "border-line bg-transparent",
    },
    interactive: {
      true: "hover:border-line-strong hover:bg-ink-800",
      false: "",
    },
  },
  defaultVariants: { surface: "base", interactive: false },
});

export type CardProps = ComponentProps<"div"> & VariantProps<typeof cardVariants>;

export function Card({ className, surface, interactive, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ surface, interactive }), className)}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardTitle({ className, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      className={cn("font-display text-lg font-medium text-paper", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm leading-relaxed text-muted", className)}
      {...props}
    />
  );
}
