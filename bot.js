const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
  client.user.setActivity('En reparaciones | Ningún comando servirá por ahora');
  client.user.setStatus('idle'); // < eso significa que este está en prueba
});

client.on('message', message => {
  if (message.content(prefix + "f")) {
    var args = message.content.substring(prefix.length).split(" "); 
    const payrespectfor = args.slice(0).join(" ");
    if(!args[1]) {
      embed = {
        "title": "",
        "description": `**${message.author.username}** ha pagado sus respetos.`,
        "color": 2335,
      };
    } else {
      embed = {
        "title": "",
        "description": `**${message.author.username}** ha pagado sus respetos por ${payrespectfor}`,
        "color": 2335,
      };
    }
    message.channel.send({ embed })
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
