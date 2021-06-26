module.exports = {
  webpack: (config) => {
    return config;
  },

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
