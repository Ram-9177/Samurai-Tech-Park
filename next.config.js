/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Netlify
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // Compression
  compress: true,
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

module.exports = nextConfig;
