const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cumrate')
        .setDescription('Tells you your cum rate'),
    async execute(interaction) {
        var rate =  Math.floor(Math.random() * 1000) + 1;

        interaction.reply({ content: 'Your cum rate is 1 in ' + rate });
    
    }
};