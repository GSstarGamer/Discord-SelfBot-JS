const notify = require('../functions/notification.js')
module.exports = {
    name: 'compact-mode',
    aliases: ['cm'],
    execute(client, message, Discord, extra) {
        if (extra['args'][0] == 'true' || extra['args'][0] == 'false') {
            client.settings.setDisplayCompactMode(JSON.parse(extra['args'][0].toLowerCase()));
            notify(`Compact mode set to ${extra['args'][0]}`)
        } else {
            notify(`${extra['args'][0]} is an invalid argumant.`)
        }
    }
};