/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile packages that use modern syntax not understood by the default
  // build pipeline (private fields, etc.). This fixes parse errors coming
  // from `undici` when Next bundles for the client.
  transpilePackages: ['undici'],
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, { isServer }) => {
    // When bundling for the client, alias Node-only modules to false
    if (!isServer) {
      config.resolve = config.resolve || {}
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        undici: false,
        'undici/lib/web/fetch/util': false,
        'undici/lib/web/fetch/headers': false,
        'undici/index': false,
      }
    }

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      encoding: false,
      child_process: false,
      crypto: false,
    };

    return config;
  },
}

module.exports = nextConfig
