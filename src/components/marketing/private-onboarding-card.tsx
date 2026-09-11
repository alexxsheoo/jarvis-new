import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { privateOnboarding } from "@/content/onboarding";
import { cn } from "@/lib/cn";

export function PrivateOnboardingCard() {
  return (
    <div className="grid gap-8 rounded-lg border border-line-strong bg-ink-950 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="flex flex-col gap-4">
        <span className="type-label-wide text-cobalt-400">
          Optional setup service
        </span>
        <h2 className="font-display text-h2 text-paper">
          {privateOnboarding.name}
        </h2>
        <p className="max-w-[58ch] leading-relaxed text-muted">
          {privateOnboarding.summary}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {privateOnboarding.includes.map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-2 text-sm text-muted"
            >
              <CheckIcon
                aria-hidden
                className="size-4 shrink-0 text-cobalt-400"
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex min-w-0 flex-col items-start gap-3 lg:min-w-56">
        <p className="flex flex-wrap items-baseline gap-2">
          <span className="type-metric text-display-md text-paper">
            {privateOnboarding.price}
          </span>
          <span className="text-sm text-muted">one time</span>
        </p>
        <p className="text-xs text-faint">
          Separate from your CRM subscription.
        </p>
        <Link
          href={privateOnboarding.href}
          className={cn(
            buttonVariants({ variant: "secondary", size: "md" }),
            "h-auto min-h-10 max-w-full whitespace-normal py-2",
          )}
        >
          <span>View private onboarding</span>
          <ArrowRightIcon aria-hidden className="size-4 shrink-0" />
        </Link>
      </div>
    </div>
  );
}
