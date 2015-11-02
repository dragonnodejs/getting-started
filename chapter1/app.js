'use strict';

// Load the libraries and modules

let config = {
    directory: __dirname + '/',
    modules: [
        ['modules/example', {
            // Configuration for the module
        }]
    ]
};
require('dragonnodejs')(config);
