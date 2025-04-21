const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv/config");
const { token } = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on("messageCreate", (message) => {
  if (
    message.content.toLowerCase() === "hi" &&
    !message.author.bot &&
    !message.replied
  ) {
    message.reply("hello");
  }
});

client.login(token);
