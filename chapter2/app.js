'use strict';

// Load the libraries and modules

let config = {
    libraries: {
        express: require('express')
    },
    directory: __dirname + '/',
    modules: [
        ['modules/app', { port: process.env.PORT || 80 }],
        ['modules/helloworld', {}]
    ]
};
require('dragonnodejs')(config);
