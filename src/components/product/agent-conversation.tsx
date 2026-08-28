"use client";

import { SparklesIcon } from "lucide-react";
import { motion } from "motion/react";

import { leadName, transcript } from "@/content/ai-agent";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const viewport = { once: true, margin: "-60px" } as const;

/**
 * A scripted lead conversation, revealed a message at a time as it scrolls in —
 * the point being the sequence, not any single reply.
 *
 * Every message renders with the same `initial` on server and client; reduced
 * motion only collapses the transition, so hydration matches either way. Same
 * approach as `StackComparison`.
 */
export function AgentConversation() {
  const reduced = useReducedMotion();

  const messageTransition = (index: number) =>
    reduced
      ? { duration: 0 }
      : {
          duration: 0.4,
          delay: Math.min(index * 0.14, 0.8),
          ease: [0.2, 0.8, 0.2, 1] as const,
        };

  return (
    <div className="flex flex-col gap-4">
      {/* Thread header: a rule broken by the label, as in the CRM itself. */}
      <div className="flex items-center gap-3">
        <span aria-hidden className="h-px flex-1 bg-line" />
        <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
          <SparklesIcon aria-hidden className="size-3.5 text-neon-400" strokeWidth={1.5} />
          Lead conversion
        </span>
        <span aria-hidden className="h-px flex-1 bg-line" />
      </div>

      <p className="text-right font-mono text-[11px] tracking-[0.06em] text-faint uppercase">
        {leadName}
      </p>

      <ol className="flex flex-col gap-4">
        {transcript.map((message, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={messageTransition(index)}
            className={cn(
              "flex flex-col gap-1.5",
              message.from === "lead" ? "items-end" : "items-start",
            )}
          >
            {message.from === "agent" ? (
              <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] text-cobalt-400 uppercase">
                <SparklesIcon aria-hidden className="size-3" strokeWidth={1.5} />
                AI agent
              </span>
            ) : null}

            <p
              className={cn(
                "text-sm leading-relaxed",
                message.from === "lead"
                  ? "max-w-[85%] rounded-md border border-line bg-ink-900 px-3.5 py-2.5 text-muted"
                  : "max-w-[92%] text-paper",
              )}
            >
              {message.body.map((segment, i) =>
                segment.em ? (
                  <span key={i} className="text-cobalt-400">
                    {segment.text}
                  </span>
                ) : (
                  <span key={i}>{segment.text}</span>
                ),
              )}
            </p>

            {message.working ? (
              <span
                aria-label="Agent acting on this message"
                role="img"
                className="mt-0.5 flex items-end gap-0.5"
              >
                {[0, 1, 2].map((bar) => (
                  <span
                    key={bar}
                    aria-hidden
                    className="jarvis-activity block h-2 w-0.5 rounded-full bg-neon-400"
                    style={{ animationDelay: `${bar * 0.18}s` }}
                  />
                ))}
              </span>
            ) : null}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
