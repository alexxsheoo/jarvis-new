/**
 * Software stack comparison.
 *
 * IMPORTANT: `vendor` labels are deliberately GENERIC categories, not named
 * competitors, and `cost` figures are ILLUSTRATIVE EXAMPLES — not verified
 * market pricing. Do not present these as factual claims about any named
 * product until real vendor and pricing data is supplied and checked.
 */

export type StackRow = {
  capability: string;
  vendor: string;
  cost: number;
  jarvis: boolean;
};

export const stackRows: StackRow[] = [
  { capability: "CRM & Pipeline Management", vendor: "CRM platform", cost: 299, jarvis: true },
  { capability: "Sales Funnels", vendor: "Funnel builder", cost: 147, jarvis: true },
  { capability: "Website Builder", vendor: "Site platform", cost: 49, jarvis: true },
  { capability: "Surveys & Forms", vendor: "Form tool", cost: 39, jarvis: true },
  { capability: "Email Marketing", vendor: "Email service provider", cost: 159, jarvis: true },
  { capability: "Two-Way SMS", vendor: "SMS provider", cost: 99, jarvis: true },
  { capability: "Booking & Appointments", vendor: "Scheduling tool", cost: 29, jarvis: true },
  { capability: "Workflow Automation", vendor: "Automation platform", cost: 119, jarvis: true },
  { capability: "Courses / Products", vendor: "Course platform", cost: 149, jarvis: true },
  { capability: "Call Tracking", vendor: "Call tracking tool", cost: 89, jarvis: true },
  { capability: "Reputation Management", vendor: "Review platform", cost: 129, jarvis: true },
  { capability: "Tracking & Analytics", vendor: "Analytics suite", cost: 99, jarvis: true },
  { capability: "Communities", vendor: "Community platform", cost: 89, jarvis: true },
  { capability: "Document Signing", vendor: "E-signature tool", cost: 45, jarvis: true },
  { capability: "Mobile Access", vendor: "Mobile add-ons", cost: 60, jarvis: true },
];

/** Derived, never hand-typed, so the table and the total cannot disagree. */
export const stackTotal = stackRows.reduce((sum, row) => sum + row.cost, 0);

export const jarvisPrice = 97;
