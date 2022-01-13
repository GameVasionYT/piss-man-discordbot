const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Says a list of commands'),
    async execute(interaction) {
        interaction.reply({ content: '__NORMAL COMMANDS__\n`p!ask`: **Ask pissman a question**\n`p!ping`: **Gets the bots latency**\n`p!serverinfo`: **Gets the amount of users in the server**\n\n__SLASH COMMANDS__\n`/balls`: **Funny!**\n`/serverinfo`: **Gets the amount of users in the server**\n`/pissrate`: **Will say your chance of pissing**\n`/pissimage`: **Will send a random image**\n`/ask`: **Ask pissman a question**' });
    }
};