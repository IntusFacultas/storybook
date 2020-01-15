module.exports = {
    stories: ['../src/**/*.stories.([tj]s|mdx)'],
    addons: [
        '@storybook/addon-actions/register', '@storybook/addon-a11y/register',
        '@storybook/addon-knobs/register', {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: {
                    '../src/**/*.stories.([tj]s|mdx)': "@storybook/addon-docs/jest-transform-mdx"
                },
            },
        },
    ]
};