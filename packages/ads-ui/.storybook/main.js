module.exports = {
  "stories": ["../src"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/html-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
