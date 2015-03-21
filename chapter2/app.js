'use strict';

// Load the libraries and modules

var config = {
    libraries: {
        express: require('express')
    },
    directory: __dirname + '/modules/',
    modules: {
        directory: {
            app: {
                port: process.env.PORT || 80
            },
            helloworld: {}
        }
    }
};
require('dragonnodejs')(config);
