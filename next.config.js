/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/worldtree-website',
  assetPrefix: '/worldtree-website',
}

module.exports = nextConfig
