const path = require("path")
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = async ({ config, mode }) => {
    config.devServer = { stats: 'errors-only' };
    config.mode = "development"
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.resolve.alias,
            Components: path.resolve(__dirname, "../src/")
        }
    }
    return config;
};