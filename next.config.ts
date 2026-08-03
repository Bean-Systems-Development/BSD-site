import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    '192.168.8.158',
    'https://bean-systems-development.github.io'
  ],
};

export default nextConfig;
