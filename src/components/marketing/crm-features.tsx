import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { ConversationInbox } from "@/components/product/conversation-inbox";
import { ProductFrame } from "@/components/product/product-frame";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { crmFeatures } from "@/content/crm";
import { brand } from "@/content/products";
import { cn } from "@/lib/cn";

/**
 * What the CRM actually does, in detail. The homepage leads with this product,
 * so it gets the full feature treatment rather than a list of nouns — every
 * entry says what the thing does, not just that it exists.
 */
export function CrmFeatures() {
  return (
    <Section id="crm-features" tone="alt">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeader
          eyebrow={`${brand.crm} — features`}
          title="Everything the revenue workflow needs, in one place"
          description="The point of a CRM is that nothing lives outside it. These are the parts of the day-to-day that stop being separate tools once the work runs here."
        />

        <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {crmFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-3 bg-ink-950 p-6"
            >
              <span className="flex size-9 items-center justify-center rounded-md border border-cobalt-500/40 bg-cobalt-glow text-cobalt-400">
                <feature.icon aria-hidden className="size-4" strokeWidth={1.5} />
              </span>
              <h3 className="font-display text-base font-medium text-paper">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {feature.body}
              </p>
            </div>
          ))}

          {/* The grid is seven wide on a three-column layout, so the last cell
              carries the CTA instead of leaving a hole. */}
          <div className="flex flex-col justify-between gap-4 bg-ink-900 p-6">
            <p className="text-sm leading-relaxed text-muted">
              Every feature above is part of the {brand.crm} subscription.
            </p>
            <Link
              href="/platform/core"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "self-start",
              )}
            >
              See the full platform
              <ArrowRightIcon aria-hidden className="size-3.5" />
            </Link>
          </div>
        </div>

        <Reveal>
          <ProductFrame label="Conversations / Inbound" status="Live">
            <ConversationInbox />
          </ProductFrame>
        </Reveal>
      </Container>
    </Section>
  );
}
