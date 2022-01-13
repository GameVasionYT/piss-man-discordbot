const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pissimage')
        .setDescription('Gives a random piss image (1-5 currently)'),
    async execute(interaction) {
        randomFunny = Math.floor(Math.random() * 6) + 1
        if (randomFunny === 1){
            interaction.reply({ content: 'https://cdn.discordapp.com/attachments/906220316035002459/929796050196262952/piss1.jpg' });
        } else if (randomFunny === 2) {
            interaction.reply({ content: 'https://cdn.discordapp.com/attachments/906220316035002459/929796050410176542/piss2.jpeg' });
        } else if (randomFunny === 3) {
            interaction.reply({ content: 'https://cdn.discordapp.com/attachments/906220316035002459/929796050640830485/piss3.jpg' });
        } else if (randomFunny === 4) {
            interaction.reply({ content: 'https://cdn.discordapp.com/attachments/906220316035002459/929796049990733874/piss4.jpg' });
        } else if (randomFunny === 5) {
            interaction.reply({ content: 'https://media.discordapp.net/attachments/906220316035002459/929828359582662666/everybodygangstatill-pisskoolaid-cold-pee-for-the-lads-44487214.png?width=339&height=406' });
        };
    }
};