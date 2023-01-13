console.clear();

const Discord = require("discord.js-selfbot-v13");
const config = require("./config.json");
const logger = require("./functions/logger.js");
const notify = require("./functions/notification.js");
const gitRepoIsUpToDate = require("git-repo-is-up-to-date");
const prompt = require("readline-sync");
const os = require("./functions/os.js");

require("dotenv").config();

const client = new Discord.Client({
    patchVoice: true,
    checkUpdate: false,
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.prefix = config["Prefix"];
client.name = config["SelfBot Name"];
client.logger = logger;
client.dellist = null;
client.dellog = "";
client.automsg = [];

const handlers = ["command_handler", "event_handler"];
handlers.forEach((handler) => {
    require(`./handlers/${handler}`)(client, Discord);
    client.logger.debug(`Loaded ${handler}`);
});

client.logger.log("Logging in...");
client.on("ready", async () => {
    console.clear();

    client.logger.debug("Checking for update...");
    const result = await gitRepoIsUpToDate();
    if (!result) {
        client.logger.warn(
            "Bot is not update to date :C, Would you like to update?"
        );
        const prom = prompt.question("Y/n: ");
        if (prom.toLowerCase() == "n") {
            client.logger.log("Okay");
        } else {
            client.logger.log("Updating...");
            os.execCommand("npm run update")
                .then((res) => {
                    client.logger.success("Finished updating. Please re-run");
                    process.exit();
                })
                .catch((err) => {
                    console.log("os >>>", err);
                });
        }
    } else {
        client.logger.success("Up to date :D");
    }

    notify(`Bot is loaded. Logged in as ${client.user.username}`);
    client.logger.success(
        `${client.name} is loaded. Logged in as ${client.user.username}`
    );
});

client.login(process.env.TOKEN);
