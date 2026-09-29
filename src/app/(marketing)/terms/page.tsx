import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { termsAndConditions } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "The terms governing use of Jarvis.",
};

export default function TermsPage() {
  return <LegalPage document={termsAndConditions} />;
}
