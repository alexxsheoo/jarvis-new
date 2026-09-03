import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { DepthField } from "@/components/motion/depth-field";
import { Reveal } from "@/components/motion/reveal";
import { ProductFrame } from "@/components/product/product-frame";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Example } from "@/components/ui/dashboard-with-collapsible-sidebar";
import DropText from "@/components/ui/drop-text";
import { ShaderBackground } from "@/components/ui/pulsing-border";
import { StatusDot } from "@/components/ui/status-dot";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * The four offers as modules of a running system rather than as a feature
 * list. States are operational words, not metrics — nothing here
 * should be mistaken for telemetry from a real account.
 *
 * `delay` staggers the status pulses so the rail reads as four independent
 * components reporting in, not one flashing row. Static strings, identical on
 * server and client.
 */
const modules = [
  { label: "Jarvis CRM", state: "Connected", delay: "0s" },
  { label: "Lead Scraper", state: "Live", delay: "0.5s" },
  { label: "xCerebro AI Agents", state: "Active", delay: "1s", working: true },
  { label: "Custom Builds", state: "Scoped", delay: "1.5s" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28">
      {/* Backdrop, painted back to front. Depth comes from light, distance,
          and grain — there is deliberately no ruled grid behind the headline.
          Every layer is a gradient on one element; nothing here runs script. */}
      <div aria-hidden className="field-sky pointer-events-none absolute inset-0 -z-10" />
      <DepthField className="-z-10" />
      <div aria-hidden className="field-bloom pointer-events-none absolute inset-0 -z-10" />
      {/* Pulsing border, over the atmospheric light so it reads as interface
          rather than weather. The shader writes opaque alpha, which would bury
          the star field underneath it — but its base colour is near-black, so
          `screen` makes that base contribute nothing and composites only the
          glow. Held at 55% because the shader's own palette peaks at white and
          full strength competes with the headline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-55 mix-blend-screen"
      >
        <ShaderBackground className="h-full w-full" />
      </div>
      <div aria-hidden className="field-vignette pointer-events-none absolute inset-0 -z-10" />
      {/* Grain last, over the light, at the threshold of visible. */}
      <div
        aria-hidden
        className="field-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.055] mix-blend-overlay"
      />

      <Container width="wide" className="relative">
        <div className="flex max-w-[54rem] flex-col items-start gap-8">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-hud bg-ink-900/80 px-3 py-1.5 font-mono text-eyebrow text-muted uppercase">
            {/* `text-neon-400` supplies currentColor for the expanding ring. */}
            <StatusDot
              tone="live"
              className="jarvis-status text-neon-400"
            />
            The {site.positioning}
          </span>

          {/* Words rather than characters: 7 pieces instead of 46, so the
              headline resolves as language instead of confetti — and the
              per-piece transforms stay cheap. Tuned well under the demo
              defaults; a 115px drop on a 5.25rem headline is a stunt. */}
          <h1 className="text-h1 md:text-display-md lg:text-display-lg text-balance text-paper">
            <DropText
              inline
              text="Run the CRM. Deploy the agents. Generate the leads. Connect the whole operation."
              splitBy="words"
              staggerFrom="left"
              yOffset={-32}
              blur={5}
              duration={0.7}
              stagger={0.055}
              ease="power2.out"
            />
          </h1>

          <p className="max-w-[56ch] text-lg leading-relaxed text-muted md:text-xl">
            Jarvis gives you the CRM. xCerebro gives you the AI workforce.
            Lead Scraper finds and prepares targeted opportunities. And when
            your business needs something different, we build it.
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
            <ProductFrame label="Dashboards / Revenue" bodyClassName="p-0">
              {/* Fixed height with the overflow clipped, so it reads as a
                  screenshot of a running app rather than a page embedded in a
                  page. Dark by default to sit in the brand, though the toggle
                  inside still works and is scoped to this subtree. */}
              <div className="h-[26rem] overflow-hidden md:h-[32rem]">
                <Example embedded defaultDark />
              </div>
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
