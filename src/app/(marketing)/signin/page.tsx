import type { Metadata } from "next";

import { PendingNotice, ProsePage } from "@/components/layout/prose-page";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your Jarvis system.",
};

export default function SignInPage() {
  return (
    <ProsePage
      eyebrow="Account"
      title="Sign in"
      description="Access the Jarvis system your business runs on."
    >
      <PendingNotice>
        No sign-in form is implemented here. Authentication belongs in the
        product application, not the marketing site — point this route at the
        real app login URL before launch.
      </PendingNotice>
    </ProsePage>
  );
}
