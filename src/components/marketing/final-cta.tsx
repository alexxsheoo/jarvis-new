import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { DepthField } from "@/components/motion/depth-field";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export function FinalCta() {
  return (
    <section id="cta" className="hairline-t relative overflow-hidden bg-ink-950 py-24 md:py-32">
      {/* The page closes on the same sky it opened on. Bloom is centred here
          rather than at the horizon, so the CTA sits in the light. */}
      <DepthField intensity="quiet" className="-z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_48%_54%_at_50%_50%,rgba(43,91,255,0.2)_0%,transparent_70%)]"
      />
      <div aria-hidden className="field-vignette pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="field-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
      />

      <Container className="relative flex flex-col items-center gap-7 text-center">
        <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
          Get started
        </span>
        <h2 className="text-h1 md:text-display-md max-w-[20ch] text-balance text-paper">
          {site.line}
        </h2>
        <p className="max-w-[52ch] text-lg leading-relaxed text-muted">
          Tell us how your business sells. We map it, build the system around it,
          and run it with you.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={site.cta.primary.href}
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            {site.cta.primary.label}
            <ArrowRightIcon aria-hidden className="size-4" />
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Talk to us first
          </Link>
        </div>
      </Container>
    </section>
  );
}
