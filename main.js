const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})





















































client.login('OTE0MjIyNDg4MzQ5NzI0Njkz.YaJ6Cg.2Yw2NeGN4FEe_zctCzjouJIrp10');