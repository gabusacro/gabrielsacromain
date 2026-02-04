import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "s0.wp.com", pathname: "/mshots/**" },
    ],
  },
};

export default nextConfig;
