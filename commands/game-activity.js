const notify = require("../functions/notification.js");
const { Client, Message } = require("discord.js-selfbot-v13");

module.exports = {
    name: "gameactivity",
    aliases: ["ga", "game"],
    /**
     * @param {Client} client
     * @param {Message} message
     */
    async execute(client, message, Discord, extra) {
        if (client.settings.activityDisplay) {
            client.settings.edit({ show_current_game: false });
            notify(`Game activity set to false`);
        } else {
            client.settings.edit({ show_current_game: true });
            notify(`Game activity set to true`);
        }
    },
};
