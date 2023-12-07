/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'https://painterwork.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'painterwork.vercel.app',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
