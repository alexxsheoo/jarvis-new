import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="relative flex flex-1 items-center overflow-hidden py-32">
      <div
        aria-hidden
        className="grid-field pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
      />
      <Container className="relative flex flex-col items-start gap-6">
        <span className="font-mono text-eyebrow text-cobalt-400 uppercase">
          404
        </span>
        <h1 className="text-h1 md:text-display-md max-w-[18ch] text-balance text-paper">
          That page is not part of the system.
        </h1>
        <p className="max-w-[52ch] text-lg leading-relaxed text-muted">
          The link may be out of date, or the page may have moved as the site
          was rebuilt.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            Back to home
          </Link>
          <Link
            href="/platform/core"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Explore the platform
          </Link>
        </div>
      </Container>
    </div>
  );
}
