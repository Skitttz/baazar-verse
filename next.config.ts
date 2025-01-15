import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL:"http://localhost:3333/",
    NEXT_PUBLIC_ENABLE_API_DELAY:"true"
  },
  reactStrictMode: false,
};

export default nextConfig;
