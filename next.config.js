/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'a-us.storyblok.com',
      'a.storyblok.com',
      'img.storyblok.com',
      'img2.storyblok.com'
    ],
    minimumCacheTTL: 60,
  },
  experimental: {
    outputStandalone: true,
  }
}

module.exports = nextConfig