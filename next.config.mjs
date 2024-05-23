/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // it should be false by default
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.baidu.com',
      },
    ],
  },
};

export default nextConfig;
