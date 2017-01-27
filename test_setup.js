require('babel-register')();

const React = require('react'),
    chai = require('chai'),
    enzyme = require('enzyme');

global.React = React;
global.mount = enzyme.mount;
global.shallow = enzyme.shallow;
global.expect = chai.expect;
global.assert = chai.assert;

const jsdom = require('jsdom').jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

documentRef = document;