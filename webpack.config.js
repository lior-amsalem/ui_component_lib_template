var path = require('path');
    webpack = require('webpack'),
    port = 5566,
    localhost = 'http://localhost:' + port,
    hotMiddlewareEntry = 'webpack-hot-middleware/client?path=' + localhost + '/__webpack_hmr';

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: [
            './dev/index',
            hotMiddlewareEntry,
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.join(__dirname, '/'),
        filename: '[name].js',
        publicPath: localhost + '/dev/',
        port: port
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: [
                path.join(__dirname, 'dev'),
                path.join(__dirname, 'src')
            ]
        }, {
            test: /\.scss$/,
            loader: 'style-loader!raw-loader!sass-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
