import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  CheckCheckIcon,
  PhoneIcon,
} from "lucide-react";

import { ProductFrame } from "@/components/product/product-frame";
import { Example } from "@/components/ui/dashboard-with-collapsible-sidebar";
import styles from "@/components/ui/hero-section-6.module.css";

/** Preserve the original dashboard and its sidebar/theme controls on desktop. */
function DesktopPreview() {
  return (
    <div className={styles.desktop}>
      <ProductFrame
        label="Jarvis CRM / Example dashboard"
        status="Demo"
        bodyClassName="p-0"
      >
        <div className={styles.desktopViewport}>
          <Example embedded defaultDark />
        </div>
      </ProductFrame>
    </div>
  );
}

function PhonePreview() {
  return (
    <div
      className={styles.phone}
      role="img"
      aria-label="Example mobile conversation in Jarvis CRM. M. Alvarez asks about a listing, agrees to Thursday at 10:30, and receives a viewing confirmation for 14 Vine Street."
    >
      <div className={styles.phoneScreen} aria-hidden>
        <div className={styles.phoneStatus}>
          <span>9:41</span>
          <span className={styles.notch} />
          <span className="font-mono text-[9px]">5G ▰</span>
        </div>
        <div className="flex items-center gap-2.5 border-b border-line px-4 pb-4 pt-3">
          <ArrowLeftIcon className="size-4 text-muted" />
          <span className="flex size-8 items-center justify-center rounded-full border border-hud bg-ink-800 font-mono text-[10px] text-neon-300">
            MA
          </span>
          <span className="flex flex-1 flex-col gap-1">
            <span className="text-xs font-medium text-paper">M. Alvarez</span>
            <span className="text-[10px] text-muted">
              Jarvis CRM · Conversation
            </span>
          </span>
          <PhoneIcon className="size-3.5 text-muted" />
        </div>
        <div className="flex flex-col gap-3 px-3.5 py-4">
          <p className="mb-1 text-center font-mono text-[9px] text-faint">
            TODAY
          </p>
          <div className={styles.incoming}>
            Is the place on Vine Street still available?
          </div>
          <div className={styles.outgoing}>
            It is. Would Thursday at 10:30 work for a viewing?
          </div>
          <div className={styles.incoming}>Thursday works. See you there!</div>
          <div className={styles.appointment}>
            <span className="flex items-center gap-1.5 text-[9px] font-medium text-neon-300">
              <CalendarDaysIcon className="size-3" /> VIEWING BOOKED
            </span>
            <p className="mt-3 text-xs font-medium text-paper">
              14 Vine Street
            </p>
            <p className="mt-1 text-[10px] text-muted">Thursday · 10:30 AM</p>
            <div className="mt-3 flex items-center gap-1 border-t border-line pt-2.5 text-[9px] text-muted">
              <CheckCheckIcon className="size-3 text-neon-400" /> Saved to the
              contact record
            </div>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-line px-4 py-3 text-[10px] text-faint">
          <span>Conversations</span>
          <span>Pipeline</span>
          <span>Calendar</span>
        </div>
        <span className={styles.homeIndicator} />
      </div>
    </div>
  );
}

export function CrmHeroPreview() {
  return (
    <figure className={styles.productFigure}>
      <div className={styles.deviceStage}>
        <DesktopPreview />
        <PhonePreview />
      </div>
      <figcaption className="relative mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-mono text-[10px] leading-relaxed tracking-wide text-muted">
        <span>JARVIS CRM</span>
        <span aria-hidden className="text-faint">
          /
        </span>
        <span>Example CRM workspace</span>
      </figcaption>
    </figure>
  );
}
