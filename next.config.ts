/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/docs', // substitua pelo nome do seu repositório
  images: {
    unoptimized: true, // necessário para exportação
  },
};

module.exports = nextConfig;
