const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const config = require("../config.json");

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        console.log(`Succesfully logged in as ${client.user.tag} on ${client.guilds.cache.size} servers\n`);

        const rest = new REST({
            version: "10"
        }).setToken(config.token.test);

        (async () => {
            try {
                console.log('Started refreshing application (/) commands...');
                await rest.put(Routes.applicationGuildCommands(client.user.id, config.GUILD_ID), {
                    body: require("../handlers/commandHandler").commands
                }).then(console.log("Successfully reloaded application (/) commands!\n"));
            } catch (err) {
                if (err) console.error(err);
            };
        })();
    }
};