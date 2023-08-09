/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
},
// env: {
//   NEXT_PUBLIC_FAUNA_SECRET_KEY: process.env.NEXT_PUBLIC_FAUNA_SECRET_KEY,
//   // CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
// },
}

module.exports = {
  webpack: (config, { isServer }) => {
      if (!isServer) {
          // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
          config.resolve.fallback = {
              fs: false,
              stream: require.resolve("stream-browserify"),
              crypto: require.resolve("crypto-browserify"),
              stream: require.resolve("stream-browserify"),
              os: require.resolve("os-browserify/browser"),
              http: false,
              https: require.resolve("https-browserify"),
              assert: require.resolve("assert/")
            }
      }

      return config;
  }
  
}
