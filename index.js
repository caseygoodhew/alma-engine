const chalk = require('chalk');
const argv = require('yargs').argv;
const autotrader = require('./autotrader');
const fileLoader = require('../good-grater').loader.file;
const urlLoader = require('../good-grater').loader.url;
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

_grater(config.loader, grater => {
    console.log(chalk.green(`Starting with ${config.start}`))

    grater({
        data: config.start,
        then: autotrader.spatula
    }, result => {
        console.log(chalk.cyanBright(JSON.stringify(result, undefined, 2)));
    });
});