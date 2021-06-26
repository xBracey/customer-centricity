const path = require("path");

module.exports = {
  addons: ["@storybook/addon-actions", "@storybook/addon-knobs"],
  stories: ["../src/components/**/**/*.stories.tsx"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, "../", "src"),
      "node_modules",
    ];

    return config;
  },
};
