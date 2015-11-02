'use strict';

/**
 * Express initialization and app service
 * @example
    ['modules/app', {
        port: process.env.PORT || 80
    }]
 */

module.exports = (config, libraries, services) => {
    var express = libraries.express;

    var app = express();
    app.listen(config.port);

    services.app = app;
};
