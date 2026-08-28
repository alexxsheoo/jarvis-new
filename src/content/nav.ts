import type { LucideIcon } from "lucide-react";
import {
  BotIcon,
  DatabaseIcon,
  LayersIcon,
  SlidersHorizontalIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type PlatformPillar = {
  label: string;
  href: string;
  summary: string;
  icon: LucideIcon;
  links: NavLink[];
};

/** The four product pillars. Drives the mega menu, mobile nav, and footer. */
export const platformPillars: PlatformPillar[] = [
  {
    label: "Jarvis Core",
    href: "/platform/core",
    summary: "The operating layer. Records, pipelines, conversations, work.",
    icon: LayersIcon,
    links: [
      { label: "CRM", href: "/platform/core#crm" },
      { label: "Custom pipelines", href: "/platform/core#pipelines" },
      { label: "Unified conversations", href: "/platform/core#conversations" },
      { label: "Workflows & tasks", href: "/platform/core#workflows" },
      { label: "Calendars", href: "/platform/core#calendars" },
      { label: "Dashboards & reporting", href: "/platform/core#reporting" },
      { label: "Integrations", href: "/platform/core#integrations" },
      { label: "Roles & permissions", href: "/platform/core#permissions" },
    ],
  },
  {
    label: "Jarvis AI Staff",
    href: "/platform/ai-staff",
    summary: "Role-based agents that carry real work, with human approvals.",
    icon: BotIcon,
    links: [
      { label: "Lead Concierge", href: "/platform/ai-staff#lead-concierge" },
      { label: "Follow-Up Agent", href: "/platform/ai-staff#follow-up" },
      { label: "Appointment Setter", href: "/platform/ai-staff#setter" },
      { label: "Acquisition Assistant", href: "/platform/ai-staff#acquisition" },
      { label: "Pipeline Coordinator", href: "/platform/ai-staff#coordinator" },
      { label: "Support Agent", href: "/platform/ai-staff#support" },
      { label: "Custom Agent", href: "/platform/ai-staff#custom" },
    ],
  },
  {
    label: "Jarvis Lead Engines",
    href: "/platform/lead-engines",
    summary: "Sourced, cleaned, enriched, scored, and routed automatically.",
    icon: DatabaseIcon,
    links: [
      { label: "Public record sourcing", href: "/platform/lead-engines#sourcing" },
      { label: "Data cleanup", href: "/platform/lead-engines#cleanup" },
      { label: "Enrichment", href: "/platform/lead-engines#enrichment" },
      { label: "Deduplication", href: "/platform/lead-engines#dedupe" },
      { label: "Lead scoring", href: "/platform/lead-engines#scoring" },
      { label: "Routing", href: "/platform/lead-engines#routing" },
      { label: "Custom scrapers", href: "/platform/lead-engines#custom" },
    ],
  },
  {
    label: "Jarvis Custom",
    href: "/platform/custom",
    summary: "Bespoke operating systems shaped to how your business runs.",
    icon: SlidersHorizontalIcon,
    links: [
      { label: "Custom pipelines", href: "/platform/custom#pipelines" },
      { label: "Custom workflows", href: "/platform/custom#workflows" },
      { label: "Integrations", href: "/platform/custom#integrations" },
      { label: "Bespoke AI agents", href: "/platform/custom#agents" },
      { label: "Business operating systems", href: "/platform/custom#os" },
    ],
  },
];

/** Top-level header items. `Platform` renders the mega panel. */
export const primaryNav: NavLink[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/about" },
];

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: platformPillars.map(({ label, href }) => ({ label, href })),
  },
  {
    title: "Solutions",
    links: [
      { label: "Owner-led sales teams", href: "/solutions#owner-led" },
      { label: "Acquisitions", href: "/solutions#acquisitions" },
      { label: "Services & trades", href: "/solutions#services" },
      { label: "Brokerages", href: "/solutions#brokerages" },
      { label: "Agencies", href: "/solutions#agencies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/resources/docs" },
      { label: "Implementation guide", href: "/resources/implementation" },
      { label: "Changelog", href: "/resources/changelog" },
      { label: "System status", href: "/status" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/security" },
];
