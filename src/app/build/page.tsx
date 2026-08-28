import type { Metadata } from "next";
import Link from "next/link";

import { BuildForm } from "@/components/forms/build-form";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Build My Jarvis",
  description:
    "Tell us how your business sells. We map it, build the system around it, and run it with you.",
};

const expectations = [
  {
    title: "A reply from a person",
    body: "Someone who has scoped builds like yours reads what you sent — not an autoresponder.",
  },
  {
    title: "A scoped plan, not a demo",
    body: "We come back with what we would build first, what it connects to, and roughly what it takes.",
  },
  {
    title: "No obligation",
    body: "If Jarvis is not the right fit for how you operate, we will tell you that instead of selling you.",
  },
];

export default function BuildPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="hairline-b">
        <Container width="wide" className="flex h-18 items-center justify-between">
          <Logo />
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-paper"
          >
            Back to site
          </Link>
        </Container>
      </header>

      <main className="flex-1 py-14 md:py-20">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div className="flex flex-col gap-8 lg:sticky lg:top-20 lg:self-start">
              <div className="flex flex-col gap-5">
                <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
                  {site.cta.primary.label}
                </span>
                <h1 className="text-h1 md:text-display-md text-balance text-paper">
                  {site.line}
                </h1>
                <p className="max-w-[48ch] text-lg leading-relaxed text-muted">
                  Every Jarvis build starts with understanding how your business
                  actually sells. The more you tell us here, the more useful the
                  first conversation is.
                </p>
              </div>

              <dl className="flex flex-col gap-5">
                {expectations.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1.5">
                    <dt className="text-sm font-medium text-paper">
                      {item.title}
                    </dt>
                    <dd className="max-w-[46ch] text-sm leading-relaxed text-muted">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-lg border border-line bg-ink-900 p-6 md:p-8">
              <BuildForm />
            </div>
          </div>
        </Container>
      </main>

      <footer className="hairline-t">
        <Container width="wide" className="flex flex-wrap gap-x-6 gap-y-2 py-6">
          <p className="font-mono text-xs text-faint">
            © {new Date().getFullYear()} Jarvis
          </p>
          <Link href="/privacy" className="font-mono text-xs text-faint hover:text-muted">
            Privacy
          </Link>
        </Container>
      </footer>
    </div>
  );
}
