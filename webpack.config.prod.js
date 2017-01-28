const path = require('path');
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const loaderJsShared = require('./webpack/loader.js.shared'),
    externalsProd = require('./webpack/externals.prod');

module.exports = {
    entry: {
        /*
            Single use entry - import X from '<your_lib_name>/dist/Component';
         */
        ComponentSecond: './src/ComponentSecond',
        /*
            import a entry - import { Component } from '<your_lib_name>';
         */
        index: [
            './src/'
        ]
    },
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: '<your_lib_name>',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            loaderJsShared,
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    ['raw-loader', 'sass-loader']
                )
            }
        ]
    },
    externals: externalsProd,
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                 NODE_ENV: JSON.stringify('production')
            }
        })
    ]
};
