import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "airhorn") {
    const variant = interaction.options.getString("variant");
    if (variant) {
      // Handle your command with the provided variant
      return interaction.reply(`Playing airhorn with variant: ${variant}`);
    }
  }

  if (interaction.isAutocomplete()) {
    if (interaction.commandName === "airhorn") {
      const focusedOption = interaction.options.getFocused(true);
      if (focusedOption.name === "variant") {
        const choices = ["classic", "loud", "short", "long"]; // Example airhorn variants
        const filteredChoices = choices.filter((choice) =>
          choice.toLowerCase().includes(focusedOption.value.toLowerCase())
        );
        await interaction.respond(
          filteredChoices.map((choice) => ({ name: choice, value: choice }))
        );
      }
    }
  }
});

client.on("ready", async () => {
  console.log(`${client.user.username} is online`);
  await client.application.commands.create({
    name: "airhorn",
    description: "Play an airhorn sound",
    options: [
      {
        name: "variant",
        type: 3,
        description: "Choose the airhorn variant",
        required: false,
        autocomplete: true,
      },
    ],
  });
  console.log("Slash command registered!");
});
client.login(process.env.TOKEN);
