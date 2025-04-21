const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { token } = require("./config.json");
const fs = require("fs");
const path = require("path");

// Create the client
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
    message.reply("hello " + message.author.displayName());
  }
});

// Login
client.login(token);
