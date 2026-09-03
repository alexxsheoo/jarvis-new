"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import Link from "next/link";

import { platformPillars, primaryNav } from "@/content/nav";
import { site } from "@/content/site";

/**
 * Desktop navigation. `Platform` opens a four-column panel so the product
 * architecture is readable without a click.
 *
 * `onOpenChange` exists so the header can go solid while a panel is open. At
 * the top of the page the header is deliberately transparent, which leaves the
 * nav strip see-through above an opaque panel — the page showing through the
 * bar it is supposed to sit under.
 */
export function MegaMenu({
  onOpenChange,
}: {
  onOpenChange?: (open: boolean) => void;
}) {
  return (
    <NavigationMenu.Root
      delayDuration={80}
      onValueChange={(value) => onOpenChange?.(value !== "")}
      className="relative hidden lg:flex"
    >
      <NavigationMenu.List className="flex items-center gap-1">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group inline-flex items-center gap-1.5 rounded-sm px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-paper data-[state=open]:text-paper">
            Platform
            <ChevronDownIcon
              aria-hidden
              className="size-3.5 transition-transform duration-200 ease-standard group-data-[state=open]:rotate-180"
            />
          </NavigationMenu.Trigger>

          {/* The surface lives here, not only on the Viewport. The Viewport is
              the element Radix animates from zero height, so anything relying
              on it for a background renders over the page unbacked until that
              transition resolves — which is exactly the see-through panel. The
              Content carrying its own opaque surface is correct at every frame,
              and the Viewport keeps its own for the rounded clip. */}
          <NavigationMenu.Content className="absolute top-0 left-0 w-full rounded-lg bg-ink-850 data-[motion=from-end]:animate-none data-[motion=from-start]:animate-none">
            <div className="grid grid-cols-4 gap-8 p-8">
              {platformPillars.map((pillar) => (
                <div key={pillar.href} className="flex flex-col gap-4">
                  <NavigationMenu.Link asChild>
                    <Link
                      href={pillar.href}
                      className="group flex flex-col gap-2 rounded-sm outline-none"
                    >
                      <span className="flex items-center gap-2">
                        <pillar.icon
                          aria-hidden
                          className="size-4 text-cobalt-400"
                          strokeWidth={1.5}
                        />
                        <span className="font-display text-sm font-medium text-paper group-hover:text-cobalt-400">
                          {pillar.label}
                        </span>
                      </span>
                      <span className="text-xs leading-relaxed text-faint">
                        {pillar.summary}
                      </span>
                    </Link>
                  </NavigationMenu.Link>

                  <ul className="flex flex-col gap-0.5 border-t border-line pt-3">
                    {pillar.links.map((link) => (
                      <li key={link.href}>
                        <NavigationMenu.Link asChild>
                          <Link
                            href={link.href}
                            className="block rounded-xs py-1.5 text-sm text-muted transition-colors hover:text-paper"
                          >
                            {link.label}
                          </Link>
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="hairline-t flex items-center justify-between bg-ink-900 px-8 py-4">
              <p className="text-sm text-muted">
                Not sure which pieces you need?{" "}
                <span className="text-paper">{site.line}</span>
              </p>
              <NavigationMenu.Link asChild>
                <Link
                  href={site.cta.primary.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-cobalt-400 transition-colors hover:text-paper"
                >
                  {site.cta.primary.label}
                  <ArrowRightIcon aria-hidden className="size-3.5" />
                </Link>
              </NavigationMenu.Link>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {primaryNav.map((item) => (
          <NavigationMenu.Item key={item.href}>
            <NavigationMenu.Link asChild>
              <Link
                href={item.href}
                className="inline-flex items-center rounded-sm px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>

      <div className="absolute top-full left-1/2 flex w-screen max-w-6xl -translate-x-1/2 justify-center">
        <NavigationMenu.Viewport className="mt-3 w-full origin-top overflow-hidden rounded-lg border border-line-strong bg-ink-850 shadow-raised transition-[height] duration-200 ease-standard data-[state=closed]:hidden" />
      </div>
    </NavigationMenu.Root>
  );
}
