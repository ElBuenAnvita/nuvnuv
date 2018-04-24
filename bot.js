const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
const command = args.shift().toLowerCase();
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong! :ping_pong:");
  } else
  if (message.content.startsWith(prefix + "tonto")) {
    message.channel.send(">:P");
  } else
  if (command === 'ayuda') {
    message.channel.send('Oye, soy nuv o también <la pro>, sólo puedes llamarme así.');
  }
});

client.on('ready', () => {
  client.user.setActivity('ser actualizada | !ayuda')
});

client.on('message', message => {
    if (message.content === 'nuv') {
    	message.channel.send('Más nuv eres tú diciendo eso. Llamame, "la pro". jsjsj');
  	}
});

client.on('message', message => {
    if (message.content === '==help') {
    	message.channel.send('Decí "nuv" a ver que pasa. También me pongo *sad*, ¿sabes?');
  	}
});

client.on('message', message => {
    if (message.content === '==corrupcion') {
    	message.channel.send('La corrpución es mala. *Pero también buena (?*');
  	}
});

client.on('message', message => {
    if (message.content === 'baka') {
    	message.channel.send('*Watashi wa bakada.*');
  	}
});

client.on('message', message => {
    if (message.content === 'sad') {
    	message.channel.send('*watashi wa totemo kanashii*');
  	}
});

client.on('message', message => {
    if (message.content === 'la pro') {
    	message.channel.send('ola');
  	}
});

client.on('message', message => {
    if (message.content === 'd mar') {
    	message.channel.send('salada c:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
