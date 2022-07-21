1. Had to do: npm install --save-dev process
2.  Had to create a webpack.config.js file and paste this:
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    // Other rules...
    plugins: [
        new NodePolyfillPlugin()
    ]
}/

**Contains the Image and the Text you want to display over the image**
parentDiv: {
        position: "relative",
        objectFit: "cover",

},

    image: {
            width: "100%",
            height: "100%",
    },
    
**Text that's displayd over the image.**
    text: {
            color: "black",
            position: "absolute",
            left: 0,
            right: 0,
            top: 30,
            // bottom: 0,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
        }