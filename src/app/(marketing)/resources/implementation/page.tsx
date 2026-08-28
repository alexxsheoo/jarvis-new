import type { Metadata } from "next";

import { ProsePage } from "@/components/layout/prose-page";
import { steps } from "@/content/homepage";

export const metadata: Metadata = {
  title: "Implementation guide",
  description:
    "What happens during mapping, build, connect, and go-live — and what Jarvis needs from your team.",
};

export default function ImplementationPage() {
  return (
    <ProsePage
      eyebrow="Resources"
      title="Implementation guide"
      description="What a Jarvis build looks like from first conversation to going live."
    >
      <ol className="flex flex-col gap-px overflow-hidden rounded-lg border border-line bg-line">
        {steps.map((step) => (
          <li key={step.number} className="flex flex-col gap-2 bg-ink-950 p-6">
            <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
              {step.number}
            </span>
            <h2 className="font-display text-h3 text-paper">{step.title}</h2>
            <p className="text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
      <p>
        Most builds go live in two to six weeks. The variable is how many
        integrations and custom workflows are in scope — mapping happens first
        so that number is known before anything is built.
      </p>
    </ProsePage>
  );
}
