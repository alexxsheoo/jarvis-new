import type { Metadata } from "next";

import { ProsePage } from "@/components/layout/prose-page";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";

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
      <p>Use your Jarvis account to open your workspace.</p>
      <a
        href={site.appUrl}
        className={buttonVariants({ size: "lg", className: "self-start" })}
      >
        Sign in to Jarvis
      </a>
    </ProsePage>
  );
}
