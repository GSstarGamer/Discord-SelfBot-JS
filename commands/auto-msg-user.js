const notify = require("../functions/notification");
const AutoMsgUser = require("../classes/auto-msg-user");

module.exports = {
    name: "automsg",
    aliases: ["am"],
    async execute(client, message, Discord, extra) {
        if (!extra["args"][0]) return notify("No user included in args");
        const user = await client.users.fetch(
            extra["args"][0].replace("<@", "").replace(">", "")
        );
        
        if (!extra["string"]) {
            const autoMessage = client.automsg.find(e => e.userID == extra["args"][0].replace("<@", "").replace(">", ""))
            const index = client.automsg.indexOf(autoMessage)
            if (index > -1) client.automsg.splice(index, 1);
            notify(`Removed ${user.username} from list`)
        } else {
            msg = extra["string"]
            if (client.automsg.find(e => e.userID == extra["args"][0].replace("<@", "").replace(">", ""))) {
                const autoMessage = client.automsg.find(e => e.userID == extra["args"][0].replace("<@", "").replace(">", ""))
                autoMessage.todo = msg
                notify(`Changed ${user.username}'s auto msg to msg: ${msg}`)
            } else {
                const automsg = new AutoMsgUser(user.id, msg);
                client.automsg.push(automsg);
                notify(
                    `Added ${user.username} to auto msg with msg: ${msg}`
                );
            }
        }
    },
};