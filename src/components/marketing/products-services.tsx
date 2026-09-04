import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { LeadScraper } from "@/components/product/lead-scraper";
import { ProductFrame } from "@/components/product/product-frame";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { offers, type Offer, type OfferAccent } from "@/content/products";
import { cn } from "@/lib/cn";

/**
 * Each offer carries its own accent so the four read as separate things rather
 * than four slices of one product — which is the whole point of the
 * architecture. The service is outlined instead of filled: one structural
 * difference says "this is not a product you buy" more clearly than a fourth
 * colour would, and keeps the palette from turning into a rainbow.
 */
const accents: Record<
  OfferAccent,
  { card: string; icon: string; name: string; cta: string }
> = {
  cobalt: {
    card: "border-cobalt-500/40 bg-ink-900",
    icon: "border-cobalt-500/40 bg-cobalt-glow text-cobalt-400",
    name: "text-paper",
    cta: "text-cobalt-400",
  },
  neon: {
    card: "border-hud bg-ink-900",
    icon: "border-hud bg-neon-glow text-neon-400",
    name: "text-paper",
    cta: "text-neon-400",
  },
  data: {
    card: "border-hud bg-ink-900",
    icon: "border-hud bg-neon-glow text-neon-300",
    name: "text-paper",
    cta: "text-neon-400",
  },
  outline: {
    card: "border-line-strong bg-transparent",
    icon: "border-line-strong bg-ink-900 text-muted",
    name: "text-paper",
    cta: "text-muted",
  },
};

function OfferCard({
  offer,
  featured = false,
}: {
  offer: Offer;
  featured?: boolean;
}) {
  const accent = accents[offer.accent];

  return (
    <Link
      href={offer.href}
      className={cn(
        "group rounded-lg border transition-colors duration-200 ease-standard hover:bg-ink-850",
        accent.card,
        // The anchor product lays out across two columns on desktop so it
        // reads as the thing you start with, not the first of four equals.
        featured
          ? "flex flex-col gap-6 p-7 lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-10"
          : "flex flex-col gap-5 p-6",
      )}
    >
      <span className={cn("flex flex-col gap-5", !featured && "contents")}>
      <span className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-md border",
            accent.icon,
          )}
        >
          <offer.icon aria-hidden className="size-5" strokeWidth={1.5} />
        </span>
        <span className="type-label text-faint">
          {offer.kind === "service" ? "Service" : "Product"}
        </span>
      </span>

      <span className="flex flex-col gap-1.5">
        <span
          className={cn(
            "font-display text-h3 tracking-[-0.01em]",
            accent.name,
          )}
        >
          {offer.name}
        </span>
        <span className={cn("text-muted", featured ? "text-lg" : "text-base")}>
          {offer.promise}
        </span>
      </span>

      <span className="text-sm leading-relaxed text-muted">{offer.summary}</span>
      </span>

      <span className={cn("flex flex-col gap-5", !featured && "contents")}>

      {/* Two columns once a list runs long — Lead Scraper carries twelve
          capabilities and a single column turns the card into a scroll. */}
      <ul
        className={cn(
          "hairline-t grid gap-x-4 gap-y-2 pt-4",
          offer.capabilities.length > 8 && "grid-cols-2",
        )}
      >
        {offer.capabilities.map((capability) => (
          <li key={capability} className="text-sm text-faint">
            {capability}
          </li>
        ))}
      </ul>

      {/* Commercial separation is the point of this architecture, so it is on
          the card rather than only on the pricing page. */}
      <span className="hairline-t pt-4 type-label text-muted">
        {offer.pricing}
      </span>

      <span
        className={cn(
          "mt-auto flex items-center gap-1.5 text-sm font-medium",
          accent.cta,
        )}
      >
        {offer.cta}
        <ArrowRightIcon
          aria-hidden
          className="size-4 transition-transform duration-200 ease-standard group-hover:translate-x-0.5"
        />
      </span>
      </span>
    </Link>
  );
}

export function ProductsServices() {
  return (
    <Section id="products" tone="alt">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Products & services"
          title={
            <>
              One company.
              <br />
              Different tools for different jobs.
            </>
          }
          description="Jarvis CRM is the hub most teams start with. xCerebro, Lead Scraper, and Custom Builds attach to it as the operation grows — each bought on its own terms."
        />

        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="type-label-wide text-cobalt-400">Start here</span>
            <span aria-hidden className="h-px flex-1 bg-line" />
          </div>

          <OfferCard offer={offers[0]} featured />

          <div className="mt-4 flex items-center gap-3">
            <span className="type-label-wide text-faint">
              Add when you need them
            </span>
            <span aria-hidden className="h-px flex-1 bg-line" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offers.slice(1).map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>

        {/* The scraper gets a real product surface rather than a card. Of the
            four it is the one nobody can picture from a name alone. */}
        <Reveal className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="type-label-wide text-neon-400">Lead Scraper</span>
            <h3 className="font-display text-h3 text-paper">
              Public records in. Leads worth calling out.
            </h3>
            <p className="max-w-[62ch] text-sm leading-relaxed text-muted">
              A run pulls county filings, then puts every record through the
              same pipeline before anything reaches a salesperson. Counts shown
              are an example run, not measured output.
            </p>
          </div>

          <ProductFrame label="Lead Scraper / Run 4182" status="Running" bodyClassName="p-0">
            <LeadScraper />
          </ProductFrame>
        </Reveal>
      </Container>
    </Section>
  );
}
