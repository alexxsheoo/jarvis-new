"use client";

import { useState } from "react";

import { agents } from "@/content/agents";
import { cn } from "@/lib/cn";

export function AgentStaff() {
  const [selectedId, setSelectedId] = useState(agents[0].id);
  const selected = agents.find((a) => a.id === selectedId) ?? agents[0];

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
      <div
        role="tablist"
        aria-label="AI staff roles"
        aria-orientation="vertical"
        className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1"
      >
        {agents.map((agent) => {
          const isSelected = agent.id === selected.id;
          return (
            <button
              key={agent.id}
              type="button"
              role="tab"
              id={`agent-tab-${agent.id}`}
              aria-selected={isSelected}
              aria-controls={`agent-panel-${agent.id}`}
              onClick={() => setSelectedId(agent.id)}
              className={cn(
                "flex items-start gap-3 rounded-md border p-3.5 text-left transition-colors duration-200",
                isSelected
                  ? "border-cobalt-500/50 bg-cobalt-glow"
                  : "border-line bg-ink-850 hover:border-line-strong hover:bg-ink-800",
              )}
            >
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-sm border",
                  isSelected
                    ? "border-cobalt-500/40 text-cobalt-400"
                    : "border-line text-muted",
                )}
              >
                <agent.icon aria-hidden className="size-4" strokeWidth={1.5} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-paper">
                  {agent.name}
                </span>
                <span className="mt-0.5 block font-mono text-[11px] tracking-[0.06em] text-faint uppercase">
                  {agent.role}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`agent-panel-${selected.id}`}
        aria-labelledby={`agent-tab-${selected.id}`}
        className="flex flex-col gap-5 rounded-lg border border-line-strong bg-ink-900 p-5 shadow-panel lg:sticky lg:top-24 lg:self-start"
      >
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] tracking-[0.06em] text-cobalt-400 uppercase">
            {selected.role}
          </span>
          <h3 className="font-display text-h3 text-paper">{selected.name}</h3>
          <p className="text-sm leading-relaxed text-muted">
            {selected.summary}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] tracking-[0.06em] text-faint uppercase">
              Triggers
            </span>
            <ul className="flex flex-col gap-1.5">
              {selected.triggers.map((trigger) => (
                <li key={trigger} className="text-xs text-muted">
                  {trigger}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] tracking-[0.06em] text-faint uppercase">
              Actions
            </span>
            <ul className="flex flex-col gap-1.5">
              {selected.actions.map((action) => (
                <li key={action} className="text-xs text-muted">
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline-t flex flex-col gap-2 pt-4">
          <span className="font-mono text-[11px] tracking-[0.06em] text-warn uppercase">
            Human approval
          </span>
          <p className="text-xs leading-relaxed text-muted">
            {selected.approval}
          </p>
        </div>
      </div>
    </div>
  );
}
