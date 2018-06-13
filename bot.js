const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
  client.user.setActivity('En reparaciones | Ningún comando servirá por ahora')
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
