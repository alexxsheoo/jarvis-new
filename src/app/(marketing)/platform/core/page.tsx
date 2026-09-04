import type { Metadata } from "next";

import { MovedPage } from "@/components/layout/moved-page";

export const metadata: Metadata = {
  title: "Jarvis CRM",
  // The replacement is the page that should rank, not this stub.
  alternates: { canonical: "/products/jarvis-crm" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <MovedPage to="/products/jarvis-crm" name="Jarvis CRM" />;
}
