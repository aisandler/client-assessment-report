const path = require('path');

module.exports = {
  // Enable React strict mode for catching common bugs
  reactStrictMode: true,

  // Add custom Webpack configuration for module aliasing
  webpack: (config) => {
    // Resolve '@' to the 'src' folder for cleaner imports
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },

  // Ensure Vercel builds are unique to avoid caching issues
  generateBuildId: async () => {
    return `build-${new Date().getTime()}`; // Unique build ID for each deployment
  },

  // Enable experimental features if you're using new Next.js features
  experimental: {
    appDir: true, // Optional: enable the new app directory structure if applicable
  },
};
