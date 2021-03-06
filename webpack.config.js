'use strict';

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let publicPath = '/dist/build/';

module.exports = {
    // development, production
    mode: 'production',
    // devtool: 'cheap-module-eval-source-map',
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
        new HtmlWebpackPlugin({
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
                test: /\.js[x]?$/,
                enforce: 'pre',
                use: [{
                    loader: 'eslint-loader',
                    options: { fix: true }
                }],
                include: path.resolve(__dirname, './src/**/*.js'),
                exclude: /node_modules/
            },
            {
                test: /\.js|.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!resolve-url-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!resolve-url-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                query: {
                    name: 'img/[name].[ext]'
                },
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
    performance: { hints: false },
};