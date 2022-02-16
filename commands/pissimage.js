const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pissimage')
        .setDescription('Gives a random piss image (1-7 currently)'),
    async execute(interaction) {
        randomFunny = Math.floor(Math.random() * 8) + 1
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
        } else if (randomFunny === 6) {
            interaction.reply({ content: 'https://media.discordapp.net/attachments/927823339853058069/931608245536194601/IMG-20220114-WA0000.jpg?width=347&height=388'});
        } else if (randomFunny === 7) {
            interaction.reply({ content: 'https://media.discordapp.net/attachments/888530261560680510/933468640802668544/cover_yourself.png?width=383&height=371' });
        } else if (randomFunny === 8) {
            interaction.reply({ content: 'https://media.discordapp.net/attachments/931405196079300609/943553376619204618/Screenshot_20220216-110355.jpg?width=413&height=415'});
        };
    }
};
