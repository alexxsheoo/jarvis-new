import { z } from "zod";

export const teamSizes = [
  "Just me",
  "2–5",
  "6–20",
  "21–50",
  "51+",
] as const;

export const pillarOptions = [
  "Jarvis CRM",
  "xCerebro AI Agents",
  "Lead Scraper",
  "Custom Builds",
] as const;

/** Shared by the client form and the server action so validation cannot diverge. */
export const buildRequestSchema = z.object({
  name: z.string().trim().min(2, "Tell us your name."),
  email: z.email("Enter a valid email address."),
  company: z.string().trim().min(1, "Tell us your company."),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  teamSize: z.enum(teamSizes, { message: "Select a team size." }),
  pillars: z
    .array(z.enum(pillarOptions))
    .min(1, "Select at least one part of the system."),
  currentTools: z.string().trim().max(2000).optional().or(z.literal("")),
  goals: z
    .string()
    .trim()
    .min(20, "A sentence or two helps us scope this properly.")
    .max(2000),
});

export type BuildRequest = z.infer<typeof buildRequestSchema>;
