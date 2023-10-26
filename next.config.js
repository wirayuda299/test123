/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ['utfs.io'],
  },
};

module.exports = nextConfig;
