/**
 * Plan comparison.
 *
 * SOURCE: read from the live site at justjarvis.com on 2026-08-29 — plan
 * names, prices, and inclusions are what that page published, not invented
 * figures. Unlike `stack.ts` and `ai-agent.ts`, this is real. It is also a
 * copy, so it drifts the moment the live page changes: re-check before launch
 * and whenever pricing moves.
 */

export type PlanCell = boolean | string;

export type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  summary: string;
  featured: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$97",
    cadence: "per month",
    summary: "The operating layer — CRM, funnels, site, and automation.",
    featured: false,
  },
  {
    name: "Elite",
    price: "$197",
    cadence: "per month",
    summary: "Basic, plus the AI that works outreach and disposition.",
    featured: true,
  },
  {
    name: "Premium",
    price: "$297",
    cadence: "per month",
    summary: "Elite, plus full mentorship alongside the system.",
    featured: false,
  },
];

export type PricingFeature = {
  label: string;
  /** One cell per plan, in `pricingPlans` order. */
  values: [PlanCell, PlanCell, PlanCell];
};

export type PricingGroup = {
  section: string;
  features: PricingFeature[];
};

export const pricingGroups: PricingGroup[] = [
  {
    section: "Platform",
    features: [
      { label: "CRM & pipeline management", values: [true, true, true] },
      { label: "Unlimited sales funnels", values: [true, true, true] },
      { label: "Website builder", values: [true, true, true] },
      { label: "Surveys & forms", values: [true, true, true] },
      { label: "Booking & appointments", values: [true, true, true] },
      { label: "Document signing", values: [true, true, true] },
    ],
  },
  {
    section: "Automation & marketing",
    features: [
      { label: "AI automation", values: [true, true, true] },
      { label: "Email marketing", values: [true, true, true] },
      { label: "Two-way SMS marketing", values: [true, true, true] },
      { label: "Workflow automations", values: [true, true, true] },
      { label: "Tracking & analytics", values: [true, true, true] },
    ],
  },
  {
    section: "Deal flow",
    features: [
      { label: "Realtor Outreach AI", values: [false, true, true] },
      { label: "Disposition AI", values: [false, true, true] },
      { label: "Buyers list", values: [false, "2M+ contacts", "2M+ contacts"] },
    ],
  },
  {
    section: "Community & coaching",
    features: [
      { label: "Exclusive Skool community", values: [false, true, true] },
      { label: "Mentorship", values: [false, false, "Full access"] },
    ],
  },
];
