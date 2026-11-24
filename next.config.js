/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/ddos-cycle',
        destination: '/writings/ddos-cycle-and-microbial-cell-factory',
        permanent: true,
      },
      { source: '/blog', destination: '/writings', permanent: true },
      { source: '/blog/:slug*', destination: '/writings', permanent: true },
    ]
  },
}

module.exports = nextConfig
