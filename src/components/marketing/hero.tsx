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

/**
 * The four platform pillars read as modules of a running system rather than as
 * a feature list. States are operational words, not metrics — nothing here
 * should be mistaken for telemetry from a real account.
 *
 * `delay` staggers the status pulses so the rail reads as four independent
 * components reporting in, not one flashing row. Static strings, identical on
 * server and client.
 */
const modules = [
  { label: "CRM & Pipelines", state: "Connected", delay: "0s" },
  { label: "Lead Engines", state: "Live", delay: "0.5s" },
  { label: "AI Staff", state: "Active", delay: "1s", working: true },
  { label: "Custom Workflows", state: "Running", delay: "1.5s" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Static field, one cobalt wash for depth, one narrow signal wash at the
          horizon. No animation back here — the motion belongs to the system
          rail and the panel, where it means something. */}
      <div
        aria-hidden
        className="grid-field pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[64rem] -translate-x-1/2 rounded-full bg-cobalt-glow blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-40 w-[34rem] -translate-x-1/2 rounded-full bg-neon-glow blur-3xl"
      />

      <Container width="wide" className="relative">
        <div className="flex max-w-3xl flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-hud bg-ink-900/80 px-3 py-1.5 font-mono text-eyebrow text-muted uppercase">
            {/* `text-neon-400` supplies currentColor for the expanding ring. */}
            <StatusDot
              tone="live"
              className="jarvis-status text-neon-400"
            />
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
        </div>

        {/* System bus. The travelling light is the one piece of ambient motion
            in the hero: data moving between the pitch and the product. */}
        <div className="mt-14 flex items-center gap-4 md:mt-16">
          <span className="shrink-0 font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
            System
          </span>
          {/* Inline duration: it has to beat the shorthand `animation` the
              utility sets, and utility ordering in the layer is not ours. */}
          <span
            aria-hidden
            className="jarvis-flow-line h-px flex-1"
            style={{ animationDuration: "5.5s" }}
          />
          <span className="shrink-0 font-mono text-[11px] tracking-[0.14em] text-neon-400 uppercase">
            All modules online
          </span>
        </div>

        <ul className="mt-4 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => (
            <li
              key={module.label}
              className={cn(
                "flex items-center justify-between gap-3 bg-ink-900 px-4 py-3.5",
                // The agent tier is the component actually holding work.
                module.working && "jarvis-agent-active",
              )}
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <StatusDot
                  tone="live"
                  className="jarvis-pulse"
                  style={{ animationDelay: module.delay }}
                />
                <span className="truncate text-sm text-paper">
                  {module.label}
                </span>
              </span>
              <span className="shrink-0 type-label text-faint">
                {module.state}
              </span>
            </li>
          ))}
        </ul>

        <Reveal delay={0.15} className="mt-10 md:mt-12">
          <div className="hud-corners relative">
            <ProductFrame label="Dashboards / Revenue">
              <DashboardPanel />
            </ProductFrame>
            {/* Sweep across the panel: the system reading its own surface. */}
            <span
              aria-hidden
              className="jarvis-scanline pointer-events-none absolute inset-0 rounded-lg"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
