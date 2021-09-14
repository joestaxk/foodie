const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'] 
            },

            {
                test: /\.(jpg|jpeg|png)/,
                type: 'asset/resource',
                generator: {
                    publicPath: 'assets/',
                },
            }
        ],
    },

    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path:   path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        // clean: true
    },
    
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'testing',
            template: './src/index.html'
        })
    ],

    mode: 'development'
}