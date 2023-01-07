const { Client, Discord } = require('discord.js-selfbot-v13')
const getTime = require('../functions/getTime')
const config = require('../config.json')
const notify = require('../functions/notification.js')


module.exports = {
    name: "messageDelete",
    once: false,
    /**
     * @param {any} message
     * @param {Client} client
     * @param {Discord} Discord
     */
    async execute(message, client, Discord) {
        if (!config['Delete Message Logger']['Enabled']) return
        try {
        if (message.channel.type == 'DM') {
            if (message.author.id == client.user.id) return
            notify(`${message.author.name} in your DMs has deleted a message saying: ${message.content}`)
            client.logger.log(`${message.content} - ${message.author.tag} - ${getTime()}`)
            const channel = await client.channels.fetch(config["Delete Message Logger"]['Log Channel ID'])

            if (client.dellist) {
                client.dellog = client.dellog+`${message.content} - ${message.author.tag} - ${getTime()}\n`
                await client.dellist.edit(`\`\`\`${client.dellog}\`\`\``)
            } else {
                client.dellog = client.dellog+`${message.content} - ${message.author.tag} - ${getTime()}\n`
                client.dellist = await channel.send(`\`\`\`${client.dellog}\`\`\``)
            }
        }   
        } catch (error) {
            return
        }       
    }
}