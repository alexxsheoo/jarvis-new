"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { legalNav, platformPillars, primaryNav } from "@/content/nav";
import { site } from "@/content/site";

import { Logo } from "./logo";

/**
 * Dismisses the sheet as it navigates. Closing here rather than reacting to a
 * pathname change keeps the sheet uncontrolled and avoids a cascading render.
 */
function CloseLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <SheetClose asChild>
      <Link href={href} className={className}>
        {children}
      </Link>
    </SheetClose>
  );
}

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open navigation"
        className="inline-flex size-10 items-center justify-center rounded-sm text-muted transition-colors hover:text-paper lg:hidden"
      >
        <MenuIcon aria-hidden className="size-5" strokeWidth={1.5} />
      </SheetTrigger>

      <SheetContent aria-describedby={undefined}>
        <SheetTitle className="sr-only">Navigation</SheetTitle>

        <div className="hairline-b flex h-16 shrink-0 items-center justify-between px-6">
          <Logo />
          <SheetClose
            aria-label="Close navigation"
            className="inline-flex size-10 items-center justify-center rounded-sm text-muted transition-colors hover:text-paper"
          >
            <XIcon aria-hidden className="size-5" strokeWidth={1.5} />
          </SheetClose>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-8">
          <Accordion type="single" collapsible className="flex flex-col">
            {platformPillars.map((pillar) => (
              <AccordionItem key={pillar.href} value={pillar.href}>
                <AccordionTrigger>
                  <span className="flex items-center gap-2.5">
                    <pillar.icon
                      aria-hidden
                      className="size-4 text-cobalt-400"
                      strokeWidth={1.5}
                    />
                    {pillar.label}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-1 pl-6.5">
                    <li>
                      <CloseLink
                        href={pillar.href}
                        className="block py-1.5 text-sm text-cobalt-400"
                      >
                        Overview
                      </CloseLink>
                    </li>
                    {pillar.links.map((link) => (
                      <li key={link.href}>
                        <CloseLink
                          href={link.href}
                          className="block py-1.5 text-sm text-muted"
                        >
                          {link.label}
                        </CloseLink>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-col">
            {primaryNav.map((item) => (
              <CloseLink
                key={item.href}
                href={item.href}
                className="hairline-b py-4 text-base font-medium text-paper"
              >
                {item.label}
              </CloseLink>
            ))}
          </div>

          <nav
            aria-label="Legal"
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
          >
            {legalNav.map((item) => (
              <CloseLink
                key={item.href}
                href={item.href}
                className="text-xs text-faint"
              >
                {item.label}
              </CloseLink>
            ))}
          </nav>
        </div>

        <div className="hairline-t flex shrink-0 flex-col gap-3 px-6 py-5">
          <CloseLink
            href="/signin"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Sign in
          </CloseLink>
          <CloseLink
            href={site.cta.primary.href}
            className={buttonVariants({ variant: "primary", size: "lg" })}
          >
            {site.cta.primary.label}
          </CloseLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}
