import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { termsDraft } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "The terms governing use of Jarvis.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return <LegalPage document={termsDraft} />;
}
