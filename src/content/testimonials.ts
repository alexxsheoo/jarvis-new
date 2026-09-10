/**
 * Customer testimonials.
 *
 * DELIBERATELY EMPTY. Testimonials are the one thing on this site that cannot
 * be written for you — an invented quote attributed to a named person or
 * company is a fabricated endorsement, and it is the kind of content that does
 * real damage when a visitor checks it.
 *
 * These quotes belong on /testimonials, never on the homepage. Until approved
 * quotes are supplied, that page shows explicitly labelled component samples.
 *
 * For each entry, use words the customer actually said. `role` and `company`
 * should be what they agreed to be identified as.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  image?: string;
};

export const testimonials: Testimonial[] = [];
