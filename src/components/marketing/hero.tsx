import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { DashboardPanel } from "@/components/product/dashboard-panel";
import { ProductFrame } from "@/components/product/product-frame";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { StatusDot } from "@/components/ui/status-dot";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const proofPoints = [
  "CRM & pipelines",
  "Lead engines",
  "AI staff",
  "Custom workflows",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Static field + single cobalt wash. No animation, no gradient stack. */}
      <div
        aria-hidden
        className="grid-field pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[64rem] -translate-x-1/2 rounded-full bg-cobalt-glow blur-3xl"
      />

      <Container width="wide" className="relative">
        <div className="flex max-w-3xl flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-900 px-3 py-1.5 font-mono text-eyebrow text-muted uppercase">
            <StatusDot tone="brand" />
            {site.positioning}
          </span>

          <h1 className="text-display-md md:text-display-lg lg:text-display-xl text-balance text-paper">
            Your revenue operation, running as one system.
          </h1>

          <p className="max-w-[56ch] text-lg leading-relaxed text-muted md:text-xl">
            Jarvis connects CRM, lead generation, automation, and AI staff into
            a single operating system — shaped around how your business actually
            sells, not around someone else&rsquo;s template.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={site.cta.primary.href}
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "jarvis-glow",
              )}
            >
              {site.cta.primary.label}
              <ArrowRightIcon aria-hidden className="size-4" />
            </Link>
            <Link
              href={site.cta.secondary.href}
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              {site.cta.secondary.label}
            </Link>
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
            {proofPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 font-mono text-xs text-faint"
              >
                <StatusDot tone="idle" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.15} className="mt-14 md:mt-20">
          <ProductFrame label="Dashboards / Revenue">
            <DashboardPanel />
          </ProductFrame>
        </Reveal>
      </Container>
    </section>
  );
}
