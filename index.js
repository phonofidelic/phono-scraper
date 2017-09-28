'use-strict';
const https = require('https');
const http = require('http');
const chalk = require('chalk');
const request = require('./lib/Request');
const extract = require('./lib/Extract');

const log = console.log;
const exit = process.exit;

const DEFAULT_URL = 'http://www.phonofidelic.com';

// Check for command arguments
log('*** process.argv', process.argv)

// Get url from command argument
const url = process.argv[2];


if (url === undefined) {
	// If no argument is provided, use default url
	url = DEFAULT_URL;
} else if (url.slice(0, 5) === 'https') {
	// httpsRequest(url);
	request.https(url, extract.element);
} else if (url.slice(0, 5) === 'http:') {
	// httpRequest(url);
	request.http(url, extract.element);
} else {
	console.error(chalk.red('Invalid url:', url));
}



