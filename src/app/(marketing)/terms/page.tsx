import type { Metadata } from "next";

import { PendingNotice, ProsePage } from "@/components/layout/prose-page";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms governing use of Jarvis.",
};

export default function TermsPage() {
  return (
    <ProsePage
      eyebrow="Legal"
      title="Terms of service"
      description="The agreement between Jarvis and the businesses that run on it."
    >
      <PendingNotice>
        This page has no terms text yet. Terms of service are a binding legal
        agreement and must be drafted or reviewed by qualified counsel. Replace
        this block before launch.
      </PendingNotice>
    </ProsePage>
  );
}
