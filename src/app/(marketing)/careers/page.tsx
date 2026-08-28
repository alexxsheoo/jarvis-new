import type { Metadata } from "next";
import Link from "next/link";

import { PendingNotice, ProsePage } from "@/components/layout/prose-page";

export const metadata: Metadata = {
  title: "Careers",
  description: "Work on the team building the Jarvis AI Revenue Operating System.",
};

export default function CareersPage() {
  return (
    <ProsePage
      eyebrow="Company"
      title="Careers"
      description="We hire people who have run operations, not just built software for them."
    >
      <PendingNotice>
        No open roles are listed. Replace this with real postings, or point the
        footer link elsewhere until there are openings.
      </PendingNotice>
      <p>
        If you think you would be useful here regardless, reach out through the{" "}
        <Link href="/contact" className="text-cobalt-400 hover:text-paper">
          contact page
        </Link>
        .
      </p>
    </ProsePage>
  );
}
