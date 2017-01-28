/**
 * Dev && Prod
 */
const path = require('path');

module.exports = {
    test: /\.js$/,
    loaders: ['babel'],
    include: [
        path.join(__dirname, '..', 'dev'),
        path.join(__dirname, '..', 'src')
    ]
};