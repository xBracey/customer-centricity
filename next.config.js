module.exports = {
  webpack: (config) => {
    return config;
  },

  pageExtensions: ["page.tsx"],

  async redirects() {
    return [
      {
        source: "/",
        destination: "/test",
        permanent: false,
      },
    ];
  },
};
