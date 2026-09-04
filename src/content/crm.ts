import type { LucideIcon } from "lucide-react";
import {
  BarChart3Icon,
  CalendarCheckIcon,
  FileTextIcon,
  GitBranchIcon,
  MessagesSquareIcon,
  UsersRoundIcon,
  WorkflowIcon,
} from "lucide-react";

/**
 * Jarvis CRM feature detail.
 *
 * The homepage leads with the CRM, so the seven capabilities listed on the
 * product card are expanded here with what each one actually does. Copy
 * describes behaviour only — no volume claims, no outcome promises, and no
 * numbers presented as customer results.
 */
export type CrmFeature = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export const crmFeatures: CrmFeature[] = [
  {
    title: "CRM & contacts",
    body: "One record per person and company, with every call, message, note, and file attached to it. No parallel spreadsheet, no second source of truth.",
    icon: UsersRoundIcon,
  },
  {
    title: "Custom pipelines",
    body: "Build the stages your business actually uses, as many pipelines as you need. Acquisitions, listings, and service jobs do not have to share one board.",
    icon: GitBranchIcon,
  },
  {
    title: "SMS, email & calling",
    body: "Two-way conversations in one thread, whichever channel the lead used. Replies land on the record instead of in someone's personal inbox.",
    icon: MessagesSquareIcon,
  },
  {
    title: "Workflow automation",
    body: "Trigger the follow-up, the task, the reminder, and the stage change from what happens in the pipeline — so the process runs without anyone remembering it.",
    icon: WorkflowIcon,
  },
  {
    title: "Calendars & appointments",
    body: "Shared availability, booking links, reminders, and reschedules, written straight onto the deal rather than living in a separate scheduler.",
    icon: CalendarCheckIcon,
  },
  {
    title: "Forms & funnels",
    body: "Capture pages and forms that create the record on submit, already assigned and already in the right pipeline stage.",
    icon: FileTextIcon,
  },
  {
    title: "Reporting & dashboards",
    body: "Pipeline value, stage movement, response times, and activity by owner — reported from the same records the team works in.",
    icon: BarChart3Icon,
  },
];
