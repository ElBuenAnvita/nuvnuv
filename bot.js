const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('perder el tiempo .help')
});

client.on('message', message => {
    if (message.content === 'nuv') {
    	message.channel.send('Más nuv eres tú diciendo eso.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
