"use strict";

var connect = require('connect');
var serveStatic = require('serve-static');
var pPort = process.env['testPort'] || 8000;

connect().use(serveStatic('www')).listen(8000, () => {
	console.log('Starting server on port ' + pPort)
});

