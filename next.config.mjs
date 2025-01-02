/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production'
const basePath = process.env.NODE_ENV === 'production' 
  ? process.env.NEXT_PUBLIC_BASE_PATH || '/hti-website' 
  : '';

const nextConfig = {
    basePath: '',
    // basePath: basePath,
    // basePath: isProd ? '/hti-website' : '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
}

export default nextConfig
