/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
  webpack: (config, { isServer }) => {
    // Handle Firebase on client side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        path: false,
        os: false,
        async_hooks: false,
      };
      
      // Externalize problematic Node.js modules
      config.externals = config.externals || [];
      config.externals.push({
        'undici': 'undici',
        'firebase-admin': 'firebase-admin',
      });
    }
    
    return config;
  },
  experimental: {
    esmExternals: 'loose',
  },
}

module.exports = nextConfig
