const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ask')
        .setDescription('Ask a question'),
    async execute(interaction) {
        var answers = [
            "Yes",
            "Maybe",
            "No"
        ];
        var index = Math.floor(Math.random() * answers.length);
        interaction.reply({ content: '' + answers[index], ephemeral: true });
    }
};