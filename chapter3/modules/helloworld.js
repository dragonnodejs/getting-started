'use strict';

/**
 * Serves the "Hello World!"
 * @example
    helloworld: {}
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
};
