import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Jarvis handles the data you and your customers provide.",
};

export default function PrivacyPage() {
  return <LegalPage document={privacyPolicy} />;
}
