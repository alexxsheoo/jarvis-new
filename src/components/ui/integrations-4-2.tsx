import { WebhookIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";

import calendar from "@/assets/integrations/calendar.svg";
import docusign from "@/assets/integrations/docusign.svg";
import gmail from "@/assets/integrations/gmail.svg";
import googleAds from "@/assets/integrations/google-ads.svg";
import meta from "@/assets/integrations/meta.svg";
import outlook from "@/assets/integrations/outlook.svg";
import quickbooks from "@/assets/integrations/quickbooks.svg";
import slack from "@/assets/integrations/slack.svg";
import stripe from "@/assets/integrations/stripe.svg";
import twilio from "@/assets/integrations/twilio.svg";
import zapier from "@/assets/integrations/zapier.svg";
import { integrations } from "@/content/homepage";
import { cn } from "@/lib/cn";

const logos: Record<string, StaticImageData> = {
  Gmail: gmail,
  Outlook: outlook,
  "Google Calendar": calendar,
  Twilio: twilio,
  Stripe: stripe,
  QuickBooks: quickbooks,
  "Meta Ads": meta,
  "Google Ads": googleAds,
  Slack: slack,
  Zapier: zapier,
  DocuSign: docusign,
};

// The supplied staggered tile pattern, with the site's existing integrations.
// Small screens use a compact list in the same reading order.
const positions = [
  [0, 1], [0, 3],
  [1, 0], [1, 2], [1, 4],
  [2, 1], [2, 3],
  [3, 0], [3, 2], [3, 4],
  [4, 1], [4, 3],
] as const;

const emptyPositions = Array.from({ length: 25 }, (_, index) => [
  Math.floor(index / 5),
  index % 5,
]).filter(([row, col]) => !positions.some(([r, c]) => r === row && c === col));

function tileStyle(row: number, col: number): CSSProperties {
  return {
    "--tile-row": row + 1,
    "--tile-col": col + 1,
  } as CSSProperties;
}

export function Integrations({ className }: { className?: string }) {
  return (
    <ul
      aria-label="Tools that connect with Jarvis"
      className={cn(
        "mx-auto grid w-full max-w-lg grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-2.5",
        className,
      )}
    >
      {integrations.map((name, index) => {
        const [row, col] = positions[index];
        const logo = logos[name];

        return (
          <li
            key={name}
            style={tileStyle(row, col)}
            className="relative flex min-h-24 flex-col items-center justify-center gap-3 rounded-lg border border-line-strong bg-ink-950 px-2 py-4 shadow-sm sm:col-[var(--tile-col)] sm:row-[var(--tile-row)] sm:aspect-square sm:min-h-0 sm:py-2"
          >
            <span aria-hidden="true" className="flex h-8 w-12 items-center justify-center">
              {logo ? (
                <Image
                  src={logo}
                  alt=""
                  width={48}
                  height={32}
                  unoptimized
                  className="h-full w-full object-contain"
                />
              ) : (
                <WebhookIcon className="size-7 text-cobalt-400" strokeWidth={1.5} />
              )}
            </span>
            <span className="text-center text-xs leading-tight text-muted">
              {name}
            </span>
          </li>
        );
      })}

      {emptyPositions.map(([row, col]) => (
        <li
          key={`empty-${row}-${col}`}
          aria-hidden="true"
          style={tileStyle(row, col)}
          className="pointer-events-none hidden aspect-square rounded-lg border border-line/40 bg-ink-950/30 sm:col-[var(--tile-col)] sm:row-[var(--tile-row)] sm:block"
        />
      ))}
    </ul>
  );
}

export default Integrations;
