const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const handlerFiles = fs.readdirSync("./handlers").filter(file => file.endsWith(".js"));

const client = new Discord.Client({intents: config.intens.split(", ")});

client.slashCommands = new Discord.Collection();

handlerFiles.forEach(file => {
    require(`./handlers/${file}`).handler(Discord, config, client);
});

client.login(config.token.test);