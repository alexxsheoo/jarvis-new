import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

type CtaBandProps = {
  title?: string;
  description?: string;
};

export function CtaBand({
  title = site.line,
  description = "Tell us how your business sells. We map it, build the system around it, and run it with you.",
}: CtaBandProps) {
  return (
    <section className="hairline-t relative overflow-hidden bg-ink-900 py-20 md:py-24">
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="text-h2 md:text-display-md max-w-[20ch] text-balance text-paper">
          {title}
        </h2>
        <p className="max-w-[52ch] text-base leading-relaxed text-muted">
          {description}
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
