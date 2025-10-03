import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['@heroui/react', 'lucide-react'],
  },
};

export default nextConfig;
