"use strict";

/**
 * Express initialization and app service
 * @example
    app: {
        port: process.env.PORT || 80
    }
 */

module.exports = function (config, libraries, services) {
    var express = libraries.express;

    var app = express();
    app.listen(config.port);

    services.app = app;
};
