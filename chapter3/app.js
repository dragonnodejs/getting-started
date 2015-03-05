"use strict";

// Load the libraries and modules

var config = {
    directory: __dirname + '/modules/',
    modules: {
        npm: [
            [require('dragonnodejs-express'), {
                app: {
                    port: process.env.PORT || 80
                }
            }]
        ],
        directory: {
            helloworld: {}
        }
    }
};
require('dragonnodejs')(config);
