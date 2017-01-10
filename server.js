"use strict";

var connect = require('connect');
var serveStatic = require('serve-static');
var pPort = process.env['testPort'] || 8080;

connect().use(serveStatic('www')).listen(8080, () => {
	console.log('Starting server on port ' + pPort)
});

