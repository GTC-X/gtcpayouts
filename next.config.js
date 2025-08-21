const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gtcfx-bucket.s3.ap-southeast-1.amazonaws.com',
        pathname: '/**',
      },
    ],
    // For Next.js < 13.1, use:
    // domains: ['gtcfx-bucket.s3.ap-southeast-1.amazonaws.com'],
  },
};

module.exports = withNextIntl(nextConfig);


