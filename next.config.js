/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['headless-wp.test','headless.naphix.com/'],
  },
}

module.exports = nextConfig
