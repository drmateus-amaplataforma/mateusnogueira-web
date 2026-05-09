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
  async rewrites() {
    return [
      // Serve a amostra oficial Atheneu sob a URL canônica da LP1 sem
      // mover o arquivo (que vive em public/livros/avaliacao/ junto com os
      // demais assets da LP1, todos referenciados nesse path).
      {
        source: '/livros/avaliacao-metabolica/amostra-livro.pdf',
        destination: '/livros/avaliacao/amostra-livro.pdf',
      },
    ];
  },
};

export default nextConfig;
