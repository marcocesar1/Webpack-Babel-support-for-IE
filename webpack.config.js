const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello Webpack!',
        }),
        new MiniCssExtractPlugin({
            filename: 'app.min.css',
        })
    ],
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        environment: {
            arrowFunction: false
        }
    }
}