const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "nuv!";

client.on('ready', () => {
  client.user.setActivity(`¡Nuv volverá a funcionar en breve ;)! | ${prefix}ayuda | Ningún comando servirá por ahora`);
  client.user.setStatus('idle'); // < eso significa que este está en prueba
});

client.on('message', message => {
  if (message.content(prefix + "ayuda")) {
    var args = message.content.substring(prefix.length).split(" "); 
    message.channel.send('Pronto')
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
