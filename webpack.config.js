const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/preset-react"] }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: 'bundle.js'
    },
    optimization: {
        minimizer: [new TerserPlugin()]
    },
};
