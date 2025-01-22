/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'kms.daherfoods.com',
          },
        ],
      },
};

export default nextConfig;
