import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { privacyDraft } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Jarvis handles the data you and your customers provide.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return <LegalPage document={privacyDraft} />;
}
