import type { Metadata } from "next";

import { MovedPage } from "@/components/layout/moved-page";

export const metadata: Metadata = {
  title: "Lead Scraper",
  // The replacement is the page that should rank, not this stub.
  alternates: { canonical: "/products/lead-scraper" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <MovedPage to="/products/lead-scraper" name="Lead Scraper" />;
}
