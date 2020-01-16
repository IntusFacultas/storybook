module.exports = async ({ config, mode }) => {
    config.devServer = { stats: 'errors-only' };
    return config;
};