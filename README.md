1. Had to do: npm install --save-dev process
2.  Had to create a webpack.config.js file and paste this:
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    // Other rules...
    plugins: [
        new NodePolyfillPlugin()
    ]
}/