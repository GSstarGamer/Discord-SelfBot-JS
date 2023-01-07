const notify = require('../functions/notification.js')

module.exports = {
    name: 'theme',
    aliases: ['th'],
    execute(client, message, Discord, extra) {
        if (extra['args'][0] == 'dark' || extra['args'][0] == 'light') {
            client.settings.setTheme(extra['args'][0])
            notify(`Changed theme to ${extra['args'][0]} mode`)
        } else {
            notify(`${extra['args'][0]} is an invalid argument.`)
        }
    }
};