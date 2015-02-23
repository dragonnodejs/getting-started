"use strict";

// Load the libraries and modules

var config = {
    directory: __dirname + '/modules/',
    modules: {
        directory: {
            example: {
                // Configuration for the module
            }
        }
    }
};
require('dragonnodejs')(config);
