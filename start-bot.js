console.clear()
const Discord = require('discord.js-selfbot-v13')
const config = require('./config.json')
const logger = require('./functions/logger.js')
const notify = require('./functions/notification.js')
const gitRepoIsUpToDate = require('git-repo-is-up-to-date')
const exec = require('child_process').exec;

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
client.dellist = null
client.dellog = ''

const handlers = ['command_handler', 'event_handler']
handlers.forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord)
    client.logger.debug(`Loaded ${handler}`)
});

client.logger.log('Logging in...')
client.on('ready', async () => {
    console.clear()

    client.logger.debug('Checking for update...')
    const result = await gitRepoIsUpToDate()
    if (result.isUpToDate) {
        client.logger.warn('Bot is not update to date :C, Would you like to update?')
        const prom = prompt('Y/n')
        if (prom.toLowerCase() == 'n') {
            client.logger.log('Okay')
        } else {
            exec('npm run update')
        }
    } else {
        client.logger.success('Up to date :D')
    }

    notify(`Bot is loaded. Logged in as ${client.user.username}`)
    client.logger.success(`${client.name} is loaded. Logged in as ${client.user.username}`)
})

client.login(process.env.TOKEN);