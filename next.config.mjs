/** @type {import('next').NextConfig} */

// The blog lives on WordPress (WordPress.com site). Temporary redirect, so the address can still move.
const BLOG_URL = 'https://blog.renua.one';

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog',
        destination: `${BLOG_URL}/`,
        permanent: false,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/:path*`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
