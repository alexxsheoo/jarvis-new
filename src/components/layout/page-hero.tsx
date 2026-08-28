import type { ReactNode } from "react";

import { DepthField } from "@/components/motion/depth-field";
import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-14 md:pt-24 md:pb-20">
      {/* Same atmosphere as the homepage hero, held back — an inner page
          should feel like the same system, not compete with the front door. */}
      <div aria-hidden className="field-sky pointer-events-none absolute inset-0 -z-10" />
      <DepthField intensity="quiet" className="-z-10" />
      <div aria-hidden className="field-vignette pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="field-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
      />
      <Container width="wide" className="relative flex flex-col gap-6">
        <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
          {eyebrow}
        </span>
        <h1 className="text-h1 md:text-display-md max-w-[22ch] text-balance text-paper">
          {title}
        </h1>
        {description ? (
          <p className="max-w-[62ch] text-lg leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
