const fs = require('fs');

module.exports = (client, Discord) => {
    const commands = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
    for (const commandFile of commands) {
        const command = require(`../commands/${commandFile}`);
        if (command.name) {
            client.commands.set(command.name, command);
            client.logger.debug(`Loaded command ${commandFile}`)
        } else {
            client.logger.warn(`${commandFile} does not have name`)
        }
    }
};