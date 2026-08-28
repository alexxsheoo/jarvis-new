import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/** Priority reflects conversion importance, not page count. */
const routes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/build", priority: 0.9 },
  { path: "/platform/core", priority: 0.8 },
  { path: "/platform/ai-staff", priority: 0.8 },
  { path: "/platform/lead-engines", priority: 0.8 },
  { path: "/platform/custom", priority: 0.8 },
  { path: "/solutions", priority: 0.7 },
  { path: "/pricing", priority: 0.7 },
  { path: "/about", priority: 0.5 },
  { path: "/contact", priority: 0.5 },
  { path: "/resources", priority: 0.4 },
  { path: "/resources/implementation", priority: 0.3 },
  { path: "/security", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: new URL(path, site.url).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
