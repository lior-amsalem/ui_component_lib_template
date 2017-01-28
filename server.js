var webpack = require('webpack'),
    config  = require('./webpack.config.dev'),
    path    = require('path'),
    express = require('express'),
    app      = express(),
    compiler = webpack(config);


app.use(require('webpack-hot-middleware')(compiler));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/dev*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dev/index.html'));
});

app.get('/', function(req, res) {
    res.redirect('/dev');
});

app.listen(5566, 'localhost', function(error) {
    if (error) {
        console.log(error);
        return;
    }

    console.log('Go to http://localhost:5566');
});
