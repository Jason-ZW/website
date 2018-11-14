'use strict';

let path = require('path');
let webpack = require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin');
let publicPath = '/dist/build/';

module.exports = {
    // development, production
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            __dirname + '/src/index/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, publicPath),
        filename: '[name].bundle.js',
        publicPath: publicPath,
        sourceMapFilename: '[name].map',
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Hot Module Replacement',
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery",
            jquery: "jquery"
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=81920'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath,
        contentBase: path.join(__dirname, publicPath),
        hot: true
    },
};