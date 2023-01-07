const notify = require('../functions/notification.js')
module.exports = {
    name: "messageCreate",
    once: false,
    async execute(message, client, Discord) {
        const prefix = client.prefix
        if (!message.content.startsWith(prefix)) return


        const args = []
        const stringsL = []
        for (word of message.content.slice(prefix.length).split(/ +/)) {
            if (word.startsWith('"') || word.endsWith('"') || word.startsWith("'") || word.endsWith("'")) {
                const neword = word.replace('"', '').replace("'", '')
                stringsL.push(neword)
            } else { args.push(word) }
        }

        const string = stringsL.join(' ')

        const cmd = args.shift().toLowerCase();
        const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

        const extra = {
            'args': args,
            'string': string
        }

        if (message.author.id !== client.user.id) {
            try {
                notify(`${message.author.username} tried to do the ${command.name} command.`)
                return
            } catch (error) {
                notify(`${message.author.username} tried to do ${message.content.slice(prefix.length)}`)
                return

            }
        }

        if (command) {
            try {
                command.execute(client, message, Discord, extra)
                await message.delete()
            } catch (err) {
                console.log(err)
                notify('An error as occurred. Please check console')
            }
        } else {
            await message.delete()
            notify('Invalid command')
        }
    }
}