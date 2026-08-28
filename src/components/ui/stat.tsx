import { cn } from "@/lib/cn";

type StatProps = {
  value: string;
  label: string;
  className?: string;
};

export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <span className="font-mono text-h3 tabular-nums text-paper">{value}</span>
      <span className="text-sm leading-snug text-muted">{label}</span>
    </div>
  );
}
