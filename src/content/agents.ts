import type { LucideIcon } from "lucide-react";
import {
  CalendarCheckIcon,
  GitBranchIcon,
  HandshakeIcon,
  LifeBuoyIcon,
  RepeatIcon,
  SettingsIcon,
  UserRoundCheckIcon,
} from "lucide-react";

export type Agent = {
  id: string;
  name: string;
  role: string;
  icon: LucideIcon;
  summary: string;
  /** What wakes the agent up. */
  triggers: string[];
  /** What it is allowed to do on its own. */
  actions: string[];
  /** Where a human signs off. */
  approval: string;
};

export const agents: Agent[] = [
  {
    id: "lead-concierge",
    name: "Lead Concierge",
    role: "First response",
    icon: UserRoundCheckIcon,
    summary:
      "Answers every inbound lead in seconds, qualifies against your criteria, and routes to the right owner.",
    triggers: ["New inbound lead", "Form submission", "Missed call"],
    actions: ["Reply and qualify", "Enrich record", "Route to owner"],
    approval: "Auto-sends first response; escalates anything off-script.",
  },
  {
    id: "follow-up",
    name: "Follow-Up Agent",
    role: "Persistence",
    icon: RepeatIcon,
    summary:
      "Works the long tail — multi-touch sequences that stop the moment a human replies.",
    triggers: ["No reply in 48h", "Stage stalled", "Reactivation list"],
    actions: ["Send sequence step", "Log attempt", "Pause on reply"],
    approval: "Sequences pre-approved; new messaging needs sign-off.",
  },
  {
    id: "setter",
    name: "Appointment Setter",
    role: "Calendar",
    icon: CalendarCheckIcon,
    summary:
      "Negotiates times against live availability and books directly onto the right calendar.",
    triggers: ["Lead qualified", "Reschedule request", "No-show"],
    actions: ["Offer times", "Book meeting", "Send reminders"],
    approval: "Books inside your rules; conflicts go to the owner.",
  },
  {
    id: "acquisition",
    name: "Acquisition Assistant",
    role: "Deal intake",
    icon: HandshakeIcon,
    summary:
      "Collects deal inputs, runs your numbers, and assembles the packet before a human ever opens it.",
    triggers: ["New opportunity", "Offer requested", "Data received"],
    actions: ["Gather inputs", "Run criteria", "Draft summary"],
    approval: "Every offer figure requires human approval.",
  },
  {
    id: "coordinator",
    name: "Pipeline Coordinator",
    role: "Throughput",
    icon: GitBranchIcon,
    summary:
      "Watches every stage for stalls, missing fields, and overdue tasks — then fixes or flags them.",
    triggers: ["Stage timeout", "Missing field", "Task overdue"],
    actions: ["Nudge owner", "Update record", "Reassign"],
    approval: "Reassignment above a threshold needs a manager.",
  },
  {
    id: "support",
    name: "Support Agent",
    role: "Post-sale",
    icon: LifeBuoyIcon,
    summary:
      "Handles recurring customer questions from your own documentation and escalates the rest.",
    triggers: ["Inbound question", "Ticket created", "Status request"],
    actions: ["Answer from docs", "Update ticket", "Escalate"],
    approval: "Answers only from sources you approve.",
  },
  {
    id: "custom",
    name: "Custom Agent",
    role: "Your process",
    icon: SettingsIcon,
    summary:
      "A role built to your operation — your triggers, your tools, your approval gates.",
    triggers: ["Any system event", "Schedule", "Manual dispatch"],
    actions: ["Defined by you", "Any integration", "Any pipeline write"],
    approval: "Scoped during the build.",
  },
];
