module.exports = {
    plugins: [
        // your custom plugins
    ],
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style-loader!raw-loader!sass-loader'
        }]
    }
};