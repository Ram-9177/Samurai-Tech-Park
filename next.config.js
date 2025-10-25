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
  
  // Disable server-side features for static export
  distDir: 'out',
};

module.exports = nextConfig;
