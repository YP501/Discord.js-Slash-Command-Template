module.exports = {
    name: "interactionCreate",
    once: false,
    async execute(interaction) {
        if (!interaction.isCommand()) return;

        const command = interaction.client.slashCommands.get(interaction.commandName);
        if(!command) return interaction.reply({
            content: "Command not found!",
            ephemeral: true
        });

        try {
            await command.execute(interaction);
        } catch(err) {
            console.error(err);
            interaction.reply({
                content: "Something went wrong with executing the command!",
                ephemeral: true
            });
        };
    }
};