import type { Metadata } from "next";

import { PendingNotice, ProsePage } from "@/components/layout/prose-page";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Jarvis handles the data you and your customers provide.",
};

export default function PrivacyPage() {
  return (
    <ProsePage
      eyebrow="Legal"
      title="Privacy"
      description="How Jarvis collects, stores, and handles data."
    >
      <PendingNotice>
        This page has no policy text yet. A privacy policy is a legal document
        that must be written or reviewed by qualified counsel against the
        jurisdictions Jarvis operates in — it should not be drafted from a
        template. Replace this block before launch.
      </PendingNotice>
      <p>
        In the meantime: the Build My Jarvis form collects the contact and
        business details you enter so we can scope a build. Questions about data
        handling can go to the team through the contact page.
      </p>
    </ProsePage>
  );
}
