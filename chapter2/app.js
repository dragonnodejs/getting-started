'use strict';

// Load the libraries and modules

let config = {
    directory: __dirname + '/',
    libraries: {
        express: require('express')
    },
    modules: [
        ['modules/app', {
            port: process.env.PORT || 80
        }],
        ['modules/helloworld', {}]
    ]
};
require('dragonnodejs')(config);
