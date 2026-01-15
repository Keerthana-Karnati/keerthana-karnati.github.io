import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      // This tells Next.js to generate a static 'out' folder
  images: {
    unoptimized: true,   // Essential for GitHub Pages since it can't run the Next.js image server
  },
  // If your repo name is NOT exactly username.github.io, 
  // you might need to add: basePath: '/your-repo-name'
};
  /* config options here */
export default nextConfig;
