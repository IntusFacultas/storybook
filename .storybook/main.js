module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-storysource",
    "@storybook/addon-notes/register",
    "storybook-addon-specifications/register",
  ],
};
