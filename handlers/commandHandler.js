const fs = require("fs");
const commands = [];

module.exports = {
    handler(Discord, config, client) {
        const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
        for (const file of commandFiles) {
            const command = require(`../commands/${file}`);
            commands.push(command.data.toJSON());
            client.slashCommands.set(command.data.name, command);
        };
    },
    commands
};