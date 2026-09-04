import type { Metadata } from "next";

import { MovedPage } from "@/components/layout/moved-page";

export const metadata: Metadata = {
  title: "xCerebro AI Agents",
  // The replacement is the page that should rank, not this stub.
  alternates: { canonical: "/products/xcerebro-ai-agents" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <MovedPage to="/products/xcerebro-ai-agents" name="xCerebro AI Agents" />;
}
