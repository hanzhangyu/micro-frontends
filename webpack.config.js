const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'single-spa.config': './single-spa.config.js',
    },
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                // Webpack style loader added so we can use materialize
                test: /\.css$/,
                use: ['vue-style-loader', 'style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve(__dirname, '.babelrc')
                }
            },
            {
                // This plugin will allow us to use AngularJS HTML templates
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader',
            },
        ],
    },
    node: {
        fs: 'empty'
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
    ],
    devtool: 'source-map',
    externals: [],
    devServer: {
        historyApiFallback: true
    }
};
