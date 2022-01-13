const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pissrate')
        .setDescription('Tells how likely you are to piss'),
    async execute(interaction) {
        var rate =  Math.floor(Math.random() * 102) + 0;
        if (rate !== 101 || rate !== 102) {
            interaction.reply({ content: 'You have a ' + rate + '% chance of pissing' });
        } else if (rate === 101) {
            interaction.reply({ content: 'You have a 420% chance of pissing' }); 
        } else if (rate === 102) {
            interaction.reply({ content: 'You have a piss% chance of pissing' });
        }
        
    }
};