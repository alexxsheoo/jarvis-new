import Link from "next/link";

import { JarvisMark } from "@/components/brand/jarvis-mark";
import { Container } from "@/components/ui/container";
import { StatusDot } from "@/components/ui/status-dot";
import { footerColumns, legalNav } from "@/content/nav";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="hairline-t bg-ink-950">
      <Container width="wide" className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div className="flex flex-col gap-4">
            {/* Same lockup as the header, at rest — the footer is not a place
                for a breathing mark. */}
            <span className="flex items-center gap-2.5">
              <JarvisMark animated={false} className="size-5 shrink-0" />
              <span className="font-display text-[17px] font-medium tracking-[-0.02em] text-paper">
                Jarvis
              </span>
            </span>
            <p className="max-w-[28ch] text-sm leading-relaxed text-muted">
              The {site.positioning} for owner-led sales businesses.
            </p>
            <p className="font-display text-sm text-paper">{site.line}</p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-mono text-eyebrow text-faint uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="hairline-t mt-16 flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="font-mono text-xs text-faint">
              © {new Date().getFullYear()} Jarvis
            </p>
            <Link
              href="/status"
              className="inline-flex items-center gap-2 font-mono text-xs text-faint transition-colors hover:text-muted"
            >
              <StatusDot tone="ok" />
              All systems operational
            </Link>
          </div>

          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs text-faint transition-colors hover:text-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
