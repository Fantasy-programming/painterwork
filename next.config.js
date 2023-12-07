/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'https://painterwork.vercel.app',
      'https://painterwork.onrender.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'painterwork.*',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
