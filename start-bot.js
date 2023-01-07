const Discord = require('discord.js-selfbot-v13')
const config = require('./config.json')
require('dotenv').config()

const client = new Discord.Client({
    patchVoice: true,
    checkUpdate: false
});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.prefix = config['Prefix']
client.name = config['SelfBot Name']

const handlers = ['command_handler', 'event_handler']
handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
});

client.on('ready', async () => {
    console.log(`Bot is loaded. Logged in as ${client.user.username}`);
})

client.login(process.env.TOKEN);