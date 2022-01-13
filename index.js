const dotenv = require('dotenv');
dotenv.config();
const discord = require('discord.js');
const client = new discord.Client({
    intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES ]
});
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents, Collection } = require('discord.js');
const prefix = process.env.PREFIX;
const TOKEN = process.env.TOKEN;
const GUILD_ID = process.env.GUILD_ID;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}

client.on('ready', () => {
    console.log('Ready!');
    client.user.setActivity("CoC (Clash of Clans)", { type: "PLAYING" });
    const CLIENT_ID = client.user.id;
    const rest = new REST({
        version: '9'
    }).setToken(TOKEN);
    (async () => {
        try {
            if (!GUILD_ID) {
                await rest.put(
                    Routes.applicationCommands(CLIENT_ID), {
                        body: commands
                    },
                );
                console.log('Successfully registered application commands globally');
            } else {
                await rest.put(
                    Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
                        body: commands
                    },
                );
                console.log('Successfully registered application commands for development guild');
            }
        } catch (error) {
            if (error) console.error(error);
        }
    })();
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        if (error) console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.on("message", (msg) => {
    let args = msg.content.trim().split(/ +/g)
    if(msg.content === prefix + "ping"){
        msg.reply(`🏓Latency is" ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    };

    if (args[0].toLowerCase() === prefix + "ask"){
        if (!args[1]) return msg.reply("Shut yo skin tone chicken bone google chrome no home flip phone disowned ice cream cone garden gnome extra chromosome metronome dimmadome genome full blown monochrome student loan indiana jones overgrown flintstone x and y hormone post malone friend zone sylvester stallone hydrocortisone sierra leone autozone professionally seen silver patrone head ass tf up");
        var answers = [
            "Yes",
            "Maybe",
            "No"
        ];
        var index = Math.floor(Math.random() * answers.length);
        msg.reply(answers[index]);
    }

    if(msg.content === prefix + "serverinfo"){
        msg.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    };

    if (msg.content === prefix + "help"){
        msg.reply('__NORMAL COMMANDS__\n`p!ask`: **Ask pissman a question**\n`p!ping`: **Gets the bots latency**\n`p!serverinfo`: **Gets the amount of users in the server**\n\n__SLASH COMMANDS__\n`/balls`: **Funny!**\n`/serverinfo`: **Gets the amount of users in the server**\n`/pissrate`: **Will say your chance of pissing**\n`/pissimage`: **Will send a random image**\n`/ask`: **Ask pissman a question**')
    };

});

client.login(TOKEN);