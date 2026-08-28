import { MessageSquareIcon, PhoneIcon, MailIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

const threads = [
  { name: "M. Alvarez", channel: MessageSquareIcon, preview: "Thursday works", time: "2m", active: true },
  { name: "Northbank LLC", channel: PhoneIcon, preview: "Missed call · texted", time: "18m", active: false },
  { name: "T. Okafor", channel: MailIcon, preview: "Sending the numbers", time: "1h", active: false },
  { name: "Aster Group", channel: MessageSquareIcon, preview: "Confirmed for Thu", time: "3h", active: false },
];

const messages = [
  { from: "them", body: "Saw the listing — is it still available?" },
  { from: "agent", body: "It is. I can get you in Thursday at 10:30 or Friday at 2. Which works?" },
  { from: "them", body: "Thursday works" },
];

export function ConversationInbox() {
  return (
    <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-[1fr_1.5fr]">
      <ul className="flex flex-col gap-px bg-line">
        {threads.map((thread) => (
          <li
            key={thread.name}
            className={cn(
              "flex items-start gap-3 p-3",
              thread.active ? "bg-ink-800" : "bg-ink-850",
            )}
          >
            <thread.channel
              aria-hidden
              className="mt-0.5 size-3.5 shrink-0 text-faint"
              strokeWidth={1.5}
            />
            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between gap-2">
                <span className="truncate text-xs font-medium text-paper">
                  {thread.name}
                </span>
                <span className="shrink-0 font-mono text-[11px] text-faint">
                  {thread.time}
                </span>
              </span>
              <span className="mt-0.5 block truncate text-xs text-muted">
                {thread.preview}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3 bg-ink-850 p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={cn(
              "max-w-[80%] rounded-md px-3 py-2 text-xs leading-relaxed",
              message.from === "them"
                ? "self-start border border-line bg-ink-900 text-muted"
                : "self-end bg-cobalt-500/15 text-paper",
            )}
          >
            {message.body}
          </div>
        ))}

        <div className="hairline-t mt-1 flex flex-wrap items-center gap-2 pt-3">
          <Badge tone="brand">AI drafted</Badge>
          <span className="text-xs text-muted">
            Booking Thu 10:30 — awaiting your approval
          </span>
        </div>
      </div>
    </div>
  );
}
