/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ucarecdn.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'kms.daherfoods.com',
      },
    ],
  },
};

export default nextConfig;
