// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other configuration options
    output: 'export', 
    images: {unoptimized:true}// Add this line to enable static export
  }
  
  export default nextConfig;
  