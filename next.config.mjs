/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/livros/avaliacao',
        destination: '/livros/avaliacao-metabolica',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
