import { ArrowRightIcon, MailIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "After checkout",
  description: "Next steps after your Jarvis CRM checkout.",
  robots: { index: false, follow: false },
};

/** A return visit is not payment evidence and must never trigger fulfillment. */
export default function CheckoutReturnPage() {
  return (
    <>
      <PageHero
        eyebrow="Jarvis CRM / after checkout"
        title="Your next steps"
        description="Check your payment confirmation and keep it for your records. If your payment is still processing, wait for confirmation before trying again."
      />
      <Section tone="alt" className="pt-10 md:pt-12">
        <Container width="wide">
          <div className="flex max-w-2xl flex-col gap-6 rounded-lg border border-line bg-ink-950 p-6 sm:p-8">
            <MailIcon aria-hidden className="size-6 text-cobalt-400" />
            <h2 className="font-display text-h3 text-paper">
              Use the email from checkout
            </h2>
            <p className="leading-relaxed text-muted">
              Keep your checkout email address handy for account setup and
              billing questions. Payment confirmation and access to your CRM
              workspace are separate steps.
            </p>
            <Link
              href="/products/jarvis-crm"
              className={buttonVariants({ variant: "secondary", size: "md" })}
            >
              Explore your CRM
              <ArrowRightIcon aria-hidden className="size-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
