import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // CRITICAL: This generates the 'out' folder GitHub needs
  images: {
    unoptimized: true, // Recommended for GitHub Pages
  },
};

export default nextConfig;