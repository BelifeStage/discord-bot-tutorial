const {Client} = require('discord.js');
const client = new Client();

const PREFIX = 'your-prefix-here';

client.on('ready', () => {
  console.log(`Well is online`);
});

client.on('message', msg => {
  if(msg.author.bot) return;

  if(!msg.content.startsWith(PREFIX)) return;
  let args = msg.content.substring(PREFIX.length).split(' ')

  switch (args[0]) {
    case "info":
    msg.channel.send('your-text here')
    break;

  case "ping":
  msg.reply('pong');
  break;

  default:
    break;
  }

});

client.login('your-token-bot');
