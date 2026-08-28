import type { Metadata } from "next";

import { PendingNotice, ProsePage } from "@/components/layout/prose-page";
import { securityPoints } from "@/content/homepage";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Permissions, audit logging, approval gates, and data ownership in Jarvis.",
};

export default function SecurityPage() {
  return (
    <ProsePage
      eyebrow="Trust"
      title="Security and control"
      description="AI that can act on your behalf needs boundaries you can inspect."
    >
      <dl className="flex flex-col gap-px overflow-hidden rounded-lg border border-line bg-line">
        {securityPoints.map((point) => (
          <div key={point.title} className="flex flex-col gap-2 bg-ink-950 p-6">
            <dt className="font-display text-base font-medium text-paper">
              {point.title}
            </dt>
            <dd className="text-sm leading-relaxed text-muted">{point.body}</dd>
          </div>
        ))}
      </dl>

      <PendingNotice>
        Formal compliance claims (SOC 2, GDPR, data residency, subprocessor
        list) are deliberately absent. Add them only once they are verified —
        publishing an unearned certification claim is a legal and trust risk.
      </PendingNotice>
    </ProsePage>
  );
}
