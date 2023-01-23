import * as dotenv from 'dotenv-flow';
dotenv.config();
import chalk from 'chalk';
import { Client, GatewayIntentBits } from 'discord.js'


console.log(chalk.red('Hello!'));

// const intents = new discord.Intents();

console.log(GatewayIntentBits);
console.log(GatewayIntentBits.DirectMessages);
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    
    // GatewayIntentBits.GuildEmojisAndStickers
  ]
});

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("messageCreate", (message) => {
  console.log(message);

  if (message.content.startsWith("ping")) {
    console.log(message.channel);
    message.channel.send("pong!");
  }
});

client.login(process.env.TOKEN);
