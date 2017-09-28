'use-strict';
const chalk = require('chalk');

const element = process.argv[3];

const Extract = function() {
};

Extract.prototype.htmlBody = htmlString => {
	const htmlBodyStart = htmlString.search('<body');
	const htmlBodyEnd = htmlString.search('</body>');

	console.log('*** htmlBody start:', htmlBodyStart);
	console.log('*** htmlBody end:', htmlBodyEnd);

	const htmlBody = htmlString.slice(htmlBodyStart, htmlBodyEnd + 7);

	console.log(chalk.blue('htmlBody:\n'), htmlBody);
}

Extract.prototype.htmlHead = htmlString => {
	const htmlHeadStart = htmlString.search('<head'),
				htmlHeadEnd = htmlString.search('</head>');

	const htmlHead = htmlString.slice(htmlHeadStart, htmlHeadEnd + 7);

	console.log(chalk.blue('htmlHead:\n'), htmlHead);
}

Extract.prototype.element = (htmlString) => {
	const start = htmlString.search(`<${element}`);
	const end = htmlString.search(`</${element}>`);

	const targetContent = htmlString.slice(start, end + `</${element}>`.length);

	console.log(chalk.blue(`Content found in <${element}>:\n`, targetContent));
}


module.exports = new Extract();