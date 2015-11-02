'use strict';

// Load the libraries and modules

let config = {
    directory: __dirname + '/',
    modules: [
        [require('dragonnodejs-express'),
            ['modules/app', {
                port: process.env.PORT || 80
            }]
        ],
        ['modules/helloworld', {}]
    ]
};
require('dragonnodejs')(config);
