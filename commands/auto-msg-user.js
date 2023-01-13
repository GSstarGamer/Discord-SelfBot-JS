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
        
        if (!extra["args"][1]) {
            const autoMessage = client.automsg.find(e => e.userID == extra["args"][0].replace("<@", "").replace(">", ""))
            const index = client.automsg.indexOf(autoMessage)
            if (index > -1) client.automsg.splice(index, 1);
            notify(`Removed ${user.username} from list`)
        } else {
            if (client.automsg.find(e => e.userID == extra["args"][0].replace("<@", "").replace(">", ""))) {
                const autoMessage = client.automsg.find(e => e.userID == extra["args"][0].replace("<@", "").replace(">", ""))
                autoMessage.todo = extra["args"][1]
                notify(`Changed ${user.username}'s auto msg to msg: ${extra["args"][1]}`)
            } else {
                const automsg = new AutoMsgUser(user.id, extra["args"][1]);
                client.automsg.push(automsg);
                notify(
                    `Added ${user.username} to auto msg with msg: ${extra["args"][1]}`
                );
            }
        }
    },
};