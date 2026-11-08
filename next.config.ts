import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Private site: tell search engines not to index any page, image or file.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  // Buying help was retired; send old links to the business setup page.
  async redirects() {
    return [{ source: "/buying-help", destination: "/business", permanent: true }];
  },
};

export default nextConfig;
