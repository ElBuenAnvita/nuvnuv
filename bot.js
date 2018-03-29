const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setActivity('ser nuv | ==help')
});

client.on('message', message => {
    if (message.content === 'nuv') {
    	message.channel.send('Más nuv eres tú diciendo eso.');
  	}
});

client.on('message', message => {
    if (message.content === '==help') {
    	message.channel.send('Decí "nuv" a ver que pasa.');
  	}
});

client.on('message', message => {
    if (message.content === '==corrupcion') {
    	message.channel.send('La corrpución es mala. *Pero también buena (?*');
  	}
});

client.on('message', message => {
    if (message.content === 'baka') {
    	message.channel.send('*Watashi wa bakada.* :tontotonto:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
