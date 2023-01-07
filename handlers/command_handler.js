const fs = require('fs');

module.exports = (client, Discord) => {
    const commands = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
    for (const commandFile of commands) {
        const command = require(`../commands/${commandFile}`);
        if (command.name) {
            client.commands.set(command.name, command);
        } else {
            console.log(`${commandFile} does not have name`)
        }
    }
};