import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/marketing/cta-band";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Documentation, implementation guidance, changelog, and system status for Jarvis.",
};

const resources = [
  {
    title: "Documentation",
    body: "Reference for pipelines, workflows, agent configuration, and integrations.",
    href: "/resources/docs",
  },
  {
    title: "Implementation guide",
    body: "What happens during mapping, build, connect, and go-live — and what we need from you.",
    href: "/resources/implementation",
  },
  {
    title: "Changelog",
    body: "What shipped, when, and what it changes for systems already running.",
    href: "/resources/changelog",
  },
  {
    title: "System status",
    body: "Current uptime and incident history across the platform.",
    href: "/status",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Everything behind the build"
        description="Reference material for teams running on Jarvis and those deciding whether to."
      />

      <Section tone="alt">
        <Container width="wide">
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="group flex flex-col gap-2 bg-ink-950 p-6 transition-colors hover:bg-ink-900"
              >
                <span className="flex items-center gap-2 font-display text-base font-medium text-paper">
                  {resource.title}
                  <ArrowRightIcon
                    aria-hidden
                    className="size-3.5 text-faint transition-colors group-hover:text-cobalt-400"
                  />
                </span>
                <span className="text-sm leading-relaxed text-muted">
                  {resource.body}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
