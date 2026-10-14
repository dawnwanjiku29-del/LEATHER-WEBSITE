/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_ACTIONS ? '/LEATHER-WEBSITE' : '';

const nextConfig = {
  output: 'export',
  // GitHub Pages hosts this project below /LEATHER-WEBSITE rather than at the domain root.
  basePath,
  env: {
    // Client components need the deployment path too; non-public environment
    // variables such as GITHUB_ACTIONS are only available on the server.
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
