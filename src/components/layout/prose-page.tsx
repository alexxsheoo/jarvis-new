import type { ReactNode } from "react";

import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type ProsePageProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

/** Shared shell for text-led pages (legal, resources, status). */
export function ProsePage({
  eyebrow,
  title,
  description,
  children,
}: ProsePageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <Section tone="alt">
        <Container className="flex max-w-[70ch] flex-col gap-5 text-base leading-relaxed text-muted">
          {children}
        </Container>
      </Section>
    </>
  );
}

/** Explicit marker for content that is not yet real. */
export function PendingNotice({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md border border-warn/25 bg-warn/10 p-5">
      <p className="font-mono text-eyebrow text-warn uppercase">
        Placeholder content
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}
