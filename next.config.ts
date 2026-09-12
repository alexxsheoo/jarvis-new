import type { NextConfig } from "next";

/** Static export served from the root of justjarvis.com. */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
