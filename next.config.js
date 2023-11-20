/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "serv.husky.nz",
      },
    ],
  },
};

module.exports = nextConfig;
