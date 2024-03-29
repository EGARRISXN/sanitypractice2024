/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{hostname: "cdn.sanity.io"}],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    taint: true,
  },
};

export default nextConfig;
