const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('balls')
        .setDescription('Balls?'),
    async execute(interaction) {
        interaction.reply({ content: 'BALLS' });
    }
};