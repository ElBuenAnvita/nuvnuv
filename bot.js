const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setActivity('ser nuv | ==help')
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

client.on('message', message => {
    if (message.content === 'nuf') {
    	message.channel.send({embed: {
  color: 3447003,
  description: "A very simple Embed!"
}});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
