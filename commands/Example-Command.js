const notify = require("../functions/notification");
const { Client, Message } = require("discord.js-selfbot-v13");

module.exports = {
    name: "command-name",
    aliases: ["alias1", "alias2"],
    /**
     * @param {Client} client
     * @param {Message} message
     */
    async execute(client, message, Discord, extra) {
        //  Code once ran
        //  extra["args"][0] first arg of the string
        //  extra["string"] big text. Ex: "This is the string"
        //  notify('Sends notification to user in desktop')
        //  const user = await client.users.fetch(extra["args"][0].replace("<@", "").replace(">", "")); for getting user
    },
};
