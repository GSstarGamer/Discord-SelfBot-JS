const notifier = require('node-notifier');
const { Client, Message } = require('discord.js-selfbot-v13')
const prettier = require("prettier");

module.exports = {
    name: 'user-details',
    aliases: ['userinfo'],
    /**
     * @param {Client} client
     * @param {Message} message
     */

    async execute(client, message, Discord, extra) {
        notifier.notify(
            {
                title: client.name,
                message: 'Are you sure?',
                wait: true
            },
            async function (err, response, metadata) {
                if (response == 'activate'){
                    const user = await client.users.fetch(extra['args'][0].replace('<@', '').replace('>', ''))
                    const profile = await user.getProfile()
                    delete profile.connectedAccounts;
                    delete profile.mutualGuilds;
                    delete profile.friendNicknames;
                    message.channel.send(`\`\`\`json\n${prettier.format(JSON.stringify(profile),{ semi: false, parser: "json" })}\n\`\`\``)
                }
            }
        );
    }
};