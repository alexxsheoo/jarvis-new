import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { AgentConversation } from "@/components/product/agent-conversation";
import { ProductFrame } from "@/components/product/product-frame";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * The conversation is the argument here, so it leads on desktop and the copy
 * sits beside it. Order is reversed on mobile — a wall of transcript before
 * anyone knows what they are looking at reads as noise.
 */
export function AgentConversion() {
  return (
    <Section id="conversion">
      <Container
        width="wide"
        className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
      >
        <Reveal className="order-2 lg:order-1">
          <ProductFrame label="Conversations / Inbound" status="Agent live">
            <AgentConversation />
          </ProductFrame>
        </Reveal>

        <div className="order-1 flex flex-col gap-5 lg:order-2">
          <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
            Sales agent
          </span>
          <h2 className="text-h2 md:text-display-md max-w-[16ch] text-balance text-paper">
            Every lead answered, then moved forward.
          </h2>
          <p className="max-w-[52ch] text-lg leading-relaxed text-muted">
            Leads arrive from every channel at every hour. The sales agent picks
            each one up in seconds, qualifies it against your criteria, and
            works toward the next real step — a booked call, not a reply that
            closes the loop and goes nowhere.
          </p>
          <Link
            href={site.cta.primary.href}
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "self-start",
            )}
          >
            {site.cta.primary.label}
            <ArrowRightIcon aria-hidden className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
