const path = require('path');
    webpack = require('webpack'),
    port = 5566,
    localhost = 'http://localhost:' + port,
    hotMiddlewareEntry = 'webpack-hot-middleware/client?path=' + localhost + '/__webpack_hmr';

const loaderScssDev = require('./webpack/loader.scss.dev'),
    loaderJsShared = require('./webpack/loader.js.shared');

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
        loaders: [
            loaderJsShared,
            loaderScssDev
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                 NODE_ENV: JSON.stringify('development')
            }
        })
    ]
};
