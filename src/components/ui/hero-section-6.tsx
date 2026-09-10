import { ArrowRightIcon, PlayIcon } from "lucide-react";
import Link from "next/link";

import { CrmHeroPreview } from "@/components/product/crm-hero-preview";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

import styles from "./hero-section-6.module.css";

/** Centered hero with the original dashboard on desktop and the phone board on mobile. */
export default function HeroSection6() {
  return (
    <section aria-labelledby="hero-heading" className={styles.hero}>
      <Container width="wide">
        <div className={styles.intro}>
          <p className="flex items-center justify-center gap-3 font-mono text-xs tracking-[0.14em] text-cobalt-400 uppercase">
            <span aria-hidden className="h-px w-8 bg-cobalt-400/50" />
            Jarvis CRM
            <span aria-hidden className="h-px w-8 bg-cobalt-400/50" />
          </p>
          <h1 id="hero-heading" className={styles.title}>
            Know who to follow up with.
            <span className="block text-muted">Keep every deal in view.</span>
          </h1>
          <p className={styles.description}>
            Keep contacts, conversations, and follow-ups with your pipeline.
            Pick up where you left off.
          </p>
          <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href={site.cta.primary.href}
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "gap-3",
              )}
            >
              {site.cta.primary.label}
              <ArrowRightIcon aria-hidden className="size-4" />
            </Link>
            <Link
              href="/#see-it-work"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              <PlayIcon aria-hidden className="size-3.5" />
              Watch the CRM overview
            </Link>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted">
            A 74-second look inside Jarvis CRM.
          </p>
        </div>
        <CrmHeroPreview />
      </Container>
    </section>
  );
}
