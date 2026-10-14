/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages hosts this project below /LEATHER-WEBSITE rather than at the domain root.
  basePath: process.env.GITHUB_ACTIONS ? '/LEATHER-WEBSITE' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
