/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "flowbite.s3.amazonaws.com",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
