import type { Metadata } from "next";

import { MovedPage } from "@/components/layout/moved-page";

export const metadata: Metadata = {
  title: "Custom Builds",
  // The replacement is the page that should rank, not this stub.
  alternates: { canonical: "/services/custom-builds" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <MovedPage to="/services/custom-builds" name="Custom Builds" />;
}
