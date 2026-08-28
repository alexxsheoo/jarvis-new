import type { Metadata } from "next";

import { PendingNotice, ProsePage } from "@/components/layout/prose-page";

export const metadata: Metadata = {
  title: "System status",
  description: "Current uptime and incident history for the Jarvis platform.",
};

export default function StatusPage() {
  return (
    <ProsePage
      eyebrow="Trust"
      title="System status"
      description="Live platform health and incident history."
    >
      <PendingNotice>
        This page shows no real status. Uptime must come from actual monitoring
        — wire it to your status provider before launch, and remove the
        &ldquo;All systems operational&rdquo; indicator in the footer until it
        reflects a real health check.
      </PendingNotice>
    </ProsePage>
  );
}
