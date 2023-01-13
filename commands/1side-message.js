const notify = require("../functions/notification");
const { Client, Message } = require("discord.js-selfbot-v13");

module.exports = {
    name: "1side-msg",
    aliases: ["1side", "1s"],
    /**
     * @param {Client} client
     * @param {Message} message
     */
    async execute(client, message, Discord, extra) {
        try {
        const user = await client.users.fetch(extra["args"][0].replace("<@", "").replace(">", ""));
        const msg = extra["string"]

        await user.unBlock()
        await user.send(msg)
        await user.setBlock()
        notify(`Done sending ${msg} to ${user.username}`)
        } catch {
            notify('Invalid arguments/error')
        }

    },
};
