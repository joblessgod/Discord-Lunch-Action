require('dotenv/config');
const { Client, GatewayIntentBits, ActivityType, Collection } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('ready', async () => {
    console.log(`${client.user.username} is online`);
    client.user.setActivity({
        name: "🤑 Developer Sanchit",
        type: ActivityType.Custom
    })

    await client.application.commands.create({
        name: 'sanchit',
        description: 'Replies with Sanchit\'s bot message.',
    });
    console.log('Slash command registered!');

});

client.on('messageCreate', (message) => {
    if (message.content === '-sanchit') {
        message.reply('Hello, I am <:Developer:1355613770394767410> Sanchit\'s bot!');
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'sanchit') {
        interaction.reply('Hello, I am <:Developer:1355613770394767410> Sanchit\'s bot!');
    }
});


client.login(process.env.TOKEN);
