const fs = require('fs');

module.exports = (client, Discord) => {
    const eventFiles = fs.readdirSync(`./events/`).filter(file => file.endsWith('.js'))
    for (eventFile of eventFiles) {
        const event = require(`../events/${eventFile}`)
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client, Discord));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client, Discord));
        }
        client.logger.debug(`Loaded event ${eventFile}`)
    }
}