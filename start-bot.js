console.clear()
const Discord = require('discord.js-selfbot-v13')
const config = require('./config.json')
const logger = require('./functions/logger.js')
const notify = require('./functions/notification.js')

require('dotenv').config()

const client = new Discord.Client({
    patchVoice: true,
    checkUpdate: false
});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.prefix = config['Prefix']
client.name = config['SelfBot Name']
client.logger = logger

const handlers = ['command_handler', 'event_handler']
handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
    client.logger.debug(`Loaded ${handler}`)
});

client.logger.log('Logging in...')
client.on('ready', async () => {
    console.clear()
    notify(`Bot is loaded. Logged in as ${client.user.username}`)
    client.logger.success(`${client.name} is loaded. Logged in as ${client.user.username}`)
})

client.login(process.env.TOKEN);