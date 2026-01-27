import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This generates the 'out' folder as thr GitHub needs
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;