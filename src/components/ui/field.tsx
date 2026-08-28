import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

const control =
  "w-full rounded-sm border border-line bg-ink-900 px-3 py-2.5 text-sm text-paper transition-colors placeholder:text-faint hover:border-line-strong focus:border-cobalt-500 focus:outline-none disabled:opacity-50";

type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

export function Field({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-1.5 text-sm font-medium text-paper"
      >
        {label}
        {required ? (
          <span aria-hidden className="text-cobalt-400">
            *
          </span>
        ) : (
          <span className="font-mono text-[11px] text-faint">optional</span>
        )}
      </label>

      {children}

      {hint && !error ? (
        <p className="text-xs text-faint">{hint}</p>
      ) : null}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-xs text-alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(control, className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea className={cn(control, "resize-y", className)} {...props} />
  );
}

export function Select({ className, ...props }: ComponentProps<"select">) {
  return <select className={cn(control, "pr-8", className)} {...props} />;
}
