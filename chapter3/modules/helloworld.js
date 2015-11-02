'use strict';

/**
 * Serves the "Hello World!"
 * @example
    ['modules/helloworld', {}]
 */

module.exports = (config, libraries, services) => {
    var app = services.app;

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
};
