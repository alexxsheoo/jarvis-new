import type { Metadata } from "next";
import Link from "next/link";

import { BuildForm } from "@/components/forms/build-form";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Custom build request",
  description:
    "Share your business details, current tools, and custom-build requirements before a discovery call with the Jarvis team.",
};

const expectations = [
  {
    title: "Your business and project",
    body: "Tell us your industry and what you want the system to do.",
  },
  {
    title: "A time that works for you",
    body: "Share your preferred date, time, and time zone, plus any alternative availability.",
  },
  {
    title: "A call confirmed with our team",
    body: "Your preferred time is a request. We will confirm an appointment with you separately.",
  },
];

export default function CustomBuildRequestPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="hairline-b">
        <Container
          width="wide"
          className="flex h-18 items-center justify-between"
        >
          <Logo />
          <Link
            href="/"
            className="text-sm text-muted transition-colors hover:text-paper"
          >
            Back to site
          </Link>
        </Container>
      </header>

      <main className="flex-1 py-8 md:py-14">
        <Container width="wide">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div className="flex flex-col gap-8 lg:sticky lg:top-20 lg:self-start">
              <div className="flex flex-col gap-5">
                <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
                  Custom Builds / request
                </span>
                <h1 className="text-h2 text-balance text-paper md:text-display-md">
                  Tell us about your custom build
                </h1>
                <p className="max-w-[48ch] text-base leading-relaxed text-muted md:text-lg">
                  Tell us about your business and when you are available for a
                  discovery call.
                </p>
              </div>

              <dl className="hidden flex-col gap-5 lg:flex">
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

            <div className="min-w-0 rounded-lg border border-line bg-ink-900 p-5 sm:p-6 md:p-8">
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
          <Link
            href="/privacy"
            className="font-mono text-xs text-faint hover:text-muted"
          >
            Privacy
          </Link>
        </Container>
      </footer>
    </div>
  );
}
