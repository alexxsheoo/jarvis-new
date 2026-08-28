import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Jarvis team about a build, an existing system, or a partnership.",
};

const routes = [
  {
    title: "Scope a build",
    body: "The fastest path. Tell us how your business sells and we come back with a plan.",
    href: site.cta.primary.href,
    label: site.cta.primary.label,
    primary: true,
  },
  {
    title: "Existing customer support",
    body: "Already running on Jarvis and need help with your system.",
    href: "/resources/docs",
    label: "Read the docs",
    primary: false,
  },
  {
    title: "Partnerships",
    body: "Agencies and consultants implementing Jarvis for their own clients.",
    href: "/build",
    label: "Start a conversation",
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the people who build it"
        description="There is no call-centre layer here. Whoever replies has scoped builds like yours."
      />

      <Section tone="alt">
        <Container width="wide">
          <div className="grid gap-4 lg:grid-cols-3">
            {routes.map((route) => (
              <div
                key={route.title}
                className="flex flex-col gap-4 rounded-lg border border-line bg-ink-950 p-6"
              >
                <h2 className="font-display text-h3 text-paper">
                  {route.title}
                </h2>
                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {route.body}
                </p>
                <Link
                  href={route.href}
                  className={buttonVariants({
                    variant: route.primary ? "primary" : "secondary",
                    size: "md",
                  })}
                >
                  {route.label}
                  {route.primary ? (
                    <ArrowRightIcon aria-hidden className="size-4" />
                  ) : null}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
