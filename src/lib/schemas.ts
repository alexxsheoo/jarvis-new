import { z } from "zod";

/** Shared by the custom-build form and its submission handler. */
export const buildRequestSchema = z.object({
  firstName: z.string().trim().min(1, "Enter your first name.").max(100),
  lastName: z.string().trim().min(1, "Enter your last name.").max(100),
  email: z.string().trim().pipe(z.email("Enter a valid email address.")),
  phone: z
    .string()
    .trim()
    .max(40)
    .refine((value) => value.replace(/\D/g, "").length >= 7, {
      message: "Enter a phone number with your country or area code.",
    }),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  industry: z
    .string()
    .trim()
    .min(2, "Tell us your business or industry.")
    .max(200),
  preferredDate: z.iso.date({ message: "Choose a valid date." }),
  preferredTime: z
    .string()
    .regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/, "Choose a valid time."),
  timeZone: z.string().trim().min(2, "Enter your city or time zone.").max(100),
  otherAvailability: z.string().trim().max(1000).optional().or(z.literal("")),
  goals: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type BuildRequest = z.infer<typeof buildRequestSchema>;
