import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Thin routes with no indexable content yet.
      disallow: ["/signin", "/status", "/resources/docs", "/resources/changelog"],
    },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}

// PREVIEW BRANCH: required by `output: export`, which cannot infer that a
// route handler is static.
export const dynamic = "force-static";
