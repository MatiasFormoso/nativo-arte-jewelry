import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  compress: true,
  
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: process.env.NODE_ENV === 'production' ? 60 * 60 * 24 * 30 : 0,
    qualities: [75, 90, 100],
    dangerouslyAllowSVG: false,
  },
  
  async redirects() {
    return [
      {
        source: "/",
        destination: "/es",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
