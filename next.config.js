/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
    serverActions: true,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
