const { VoiceConnection } = require('@discordjs/voice');

require('@discordjs/voice');

module.exports = async (client, message, ctx) => {
    const id = message.split('-', 2)[1]
    console.log(id)

    const channel = client.channels.cache.get(id);
    if (message.split('-', 2)[0].replace(' ', '') == 'call') {
        await channel.call();
    }
}