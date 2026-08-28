import type { Metadata } from "next";

import { PendingNotice, ProsePage } from "@/components/layout/prose-page";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Reference for pipelines, workflows, agent configuration, and integrations.",
};

export default function DocsPage() {
  return (
    <ProsePage
      eyebrow="Resources"
      title="Documentation"
      description="Reference for the teams running a Jarvis system day to day."
    >
      <PendingNotice>
        Documentation content has not been written. This route exists so the
        navigation resolves; it should be replaced by real reference material or
        pointed at the product documentation host before launch.
      </PendingNotice>
    </ProsePage>
  );
}
