import type { NextConfig } from "next";

/**
 * PREVIEW BRANCH ONLY — do not merge into main.
 *
 * Static export for GitHub Pages, so the site can be viewed without a Vercel
 * project. Every route already prerenders as static, so nothing is lost but
 * the image optimiser (unavailable off Vercel) and the server action, which
 * only ran zod validation and is dropped to a plain client function.
 *
 * basePath is required because Pages serves a project repo from a subpath.
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jarvis-new",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
