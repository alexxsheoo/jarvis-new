import type { ReactNode } from "react";

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
      <div
        aria-hidden
        className="grid-field pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
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
