var webpack = require('webpack'),
    config  = require('./webpack.config'),
    path    = require('path'),
    express = require('express'),
    app      = express(),
    compiler = webpack(config);


app.use(require('webpack-hot-middleware')(compiler));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/dev/:component', function(req, res) {
    res.sendFile(path.join(__dirname, 'dev/index.html'));
});

app.listen(3344, 'localhost', function(error) {
    if (error) {
        console.log(error);
        return;
    }

    console.log('Go to http://localhost:3344');
});
