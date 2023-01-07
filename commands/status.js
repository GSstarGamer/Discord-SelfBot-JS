const notify = require('../functions/notification.js')
module.exports = {
    name: 'pr',
    execute(client, message, Discord, extra) {
        client.settings.setCustomStatus({
            status: extra['args'][0], // 'online' | 'idle' | 'dnd' | 'invisible' | null
            text: extra['string'], // String | null
            emoji: extra['args'][1], // UnicodeEmoji | DiscordEmoji | null
            expires: null, // Date.now() + 1 * 3600 * 1000 <= 1h to ms
        });
        notify(`Change status type: ${extra['args'][0]} text: "${extra['string']}" emoji: ${extra['args'][1]}`)
    }
}