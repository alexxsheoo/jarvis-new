import type { Metadata } from "next";

import { PendingNotice, ProsePage } from "@/components/layout/prose-page";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What shipped in Jarvis, when, and what it changes.",
};

export default function ChangelogPage() {
  return (
    <ProsePage
      eyebrow="Resources"
      title="Changelog"
      description="What shipped, when, and what it changes for systems already running."
    >
      <PendingNotice>
        No entries yet. Changelog entries should be generated from real releases
        rather than written by hand here — inventing a release history would
        misrepresent the product.
      </PendingNotice>
    </ProsePage>
  );
}
