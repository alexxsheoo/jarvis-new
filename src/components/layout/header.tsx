"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

import { Logo } from "./logo";
import { MegaMenu } from "./mega-menu";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[height,background-color,border-color] duration-200 ease-standard",
        condensed
          ? "h-15 border-b border-line bg-ink-950/80 backdrop-blur-md"
          : "h-18 border-b border-transparent bg-transparent",
      )}
    >
      <Container width="wide" className="flex h-full items-center gap-8">
        <Logo />

        <div className="flex-1">
          <MegaMenu />
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/signin"
            className={buttonVariants({ variant: "ghost", size: "md" })}
          >
            Sign in
          </Link>
          <Link
            href={site.cta.primary.href}
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            {site.cta.primary.label}
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
