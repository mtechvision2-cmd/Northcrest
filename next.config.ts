import type { NextConfig } from "next";

// The z.ai sandbox serves the site with `next start` on a standalone build.
// Netlify (and other hosts that run the official Next runtime) must NOT use
// output: "standalone", so it is only enabled when NETLIFY env is absent.
const nextConfig: NextConfig = {
  ...(process.env.NETLIFY ? {} : { output: "standalone" as const }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
