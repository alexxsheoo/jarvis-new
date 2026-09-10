import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { offers } from "@/content/products";

const summaries: Record<string, string> = {
  agents: "AI agents for follow-up, appointment setting, and assigned tasks.",
  scraper: "Find and prepare leads from public records and selected sources.",
  builds: "Pipelines, automations, and integrations built around your process.",
};

/** Brief introductions only; product details and demos live on their own pages. */
export function ProductsServices() {
  return (
    <Section
      id="products"
      aria-labelledby="other-products-heading"
      tone="alt"
      className="py-12 md:py-16"
    >
      <Container width="wide" className="flex flex-col gap-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="type-label-wide text-cobalt-400">
              Products &amp; Services
            </span>
            <h2
              id="other-products-heading"
              className="font-display text-h3 text-paper"
            >
              Add more when you need it.
            </h2>
            <p className="text-sm text-muted">
              Available separately or as a scoped Jarvis CRM bundle.
            </p>
          </div>
          <Link
            href="/pricing#bundles"
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm text-cobalt-400 hover:text-paper"
          >
            View bundle options
            <ArrowRightIcon aria-hidden className="size-4" />
          </Link>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {offers
            .filter((offer) => offer.id !== "crm")
            .map((offer) => (
              <Link
                key={offer.id}
                href={offer.href}
                className="group flex min-w-0 items-start gap-4 rounded-lg border border-line bg-ink-950 p-5 hover:border-cobalt-500/50 hover:bg-ink-850"
              >
                <offer.icon
                  aria-hidden
                  className="mt-0.5 size-5 shrink-0 text-cobalt-400"
                  strokeWidth={1.5}
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-medium text-paper">
                    {offer.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {summaries[offer.id]}
                  </p>
                </div>
                <ArrowRightIcon
                  aria-hidden
                  className="mt-1 size-4 shrink-0 text-faint group-hover:text-cobalt-400"
                />
              </Link>
            ))}
        </div>
      </Container>
    </Section>
  );
}
