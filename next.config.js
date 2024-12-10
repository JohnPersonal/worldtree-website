/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/worldtree-website', // Replace with your repository name
  assetPrefix: '/worldtree-website/', // Replace with your repository name
}

module.exports = nextConfig