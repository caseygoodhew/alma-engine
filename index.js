const chalk = require('chalk');
const argv = require('yargs').argv;
const autotrader = require('./autotrader');
const fileLoader = require('../good-grater').loaders.file;
const urlLoader = require('../good-grater').loaders.url;
const _grater = require('../good-grater');

const config = {};

if (argv.source === 'file') {
    config.loader = fileLoader((rel, context, done) => {
        const file = rel.replace(/[^a-z0-9]/gi, '_');
        done(`${__dirname}/samples`, `${file}.html`);
    });

    config.start = autotrader.file;
} else {
    config.loader = urlLoader;
    config.start = autotrader.url;
}

const grater = _grater({
    resourceLoader: config.loader
});




grater(autotrader.spatula, config.start, result => {
    console.log(chalk.cyanBright(JSON.stringify(result, undefined, 2)));
});