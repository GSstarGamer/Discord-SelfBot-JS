const chalk = require('chalk');
const getTime = require('../functions/getTime')

function success(log) {
    return console.log(`${getTime()} | ${chalk.hex('#8cc265')('[Success]')} | ${log}`);
}

function warn(log) {
    return console.log(`${getTime()} | ${chalk.hex('#d18f52')('[Warning]')} | ${log}`);
}

function error(log) {
    return console.log(`${getTime()} |  ${chalk.hex('#ff616e')('[Error]')}  | ${log}`);
}

function log(log) {
    return console.log(`${getTime()} |   ${chalk.hex('#4aa5f0')('[Log]')}   | ${log}`);
}

function discord(log) {
    return console.log(`${getTime()} | ${chalk.hex('#5865F2')('[Discord]')} | ${log}`);
}

function debug(log) {
    return console.log(`${getTime()} |  ${chalk.hex('#F1C40F')('[Debug]')}  | ${log}`);
}

module.exports = { success, warn, error, log, discord, debug };