'use-strict';

const http = require('http'),
			https = require('https'),
			chalk = require('chalk');

const Request = function() {
};

Request.prototype.https = (url, cb) => {
	// Get data from target url
	https.get(url, res => {
		console.log(chalk.black.bgGreen('*** https request ***'));
		const statusCode = res.statusCode;

		let error;

		if (statusCode !== 200) {
			error = new Error('Request Failed.\n' + `Status Code:${statusCode}`);
		}

		if (error) {
			console.error(error.message);
			res.resume();
			return;
		}

		res.setEncoding('utf8');
		let rawData = '';
		res.on('data', chunk => rawData += chunk);
		res.on('end', () => {
			try {
				// Handle data with callback
				cb(rawData);
			} catch (err) {
				console.error(err.message);
			}
		});
	}).on('error', err => {
		console.error(chalk.white.bgRed(`Something went wrong: ${err.code}\n`), err.message);
	});
};

Request.prototype.http = (url, cb) => {
	http.get(url, res => {
		console.log(chalk.black.bgGreen('*** http request ***'));
		const statusCode = res.statusCode;

		let error;

		if (statusCode !== 200) {
			error = new Error('Request Failed.\n' + `Status Code:${statusCode}`);
		}

		if (error) {
			console.error(error.message);
			res.resume();
			return;
		}

		res.setEncoding('utf8');
		let rawData = '';
		res.on('data', chunk => rawData += chunk);
		res.on('end', () => {
			try {
				// Handle data with callback
				cb(rawData);
			} catch (err) {
				console.error(err.message);
			}
		});
	}).on('error', err => {
		console.error(chalk.white.bgRed(`Something went wrong: ${err.code}\n`), err.message);
	});
};

module.exports = new Request();
