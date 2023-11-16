/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ['utfs.io'],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
