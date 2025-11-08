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
    // When bundling for the client, alias `undici` to false so webpack
    // doesn't try to bundle Node-only internals that cause parse errors.
    if (!isServer) {
      config.resolve = config.resolve || {}
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        undici: false,
      }
    }

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      encoding: false,
    };

    return config;
  },
}

module.exports = nextConfig
