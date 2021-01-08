const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '+';

const prefixxx = '-';

const antispam = require('better-discord-antispam');

let cooldown = new Set()
let cdseconds = 5;
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('VSN bot is online!');

    client.user.setActivity("merry Christmas :D", {
        type: "STREAMING",
        url: "https://www.twitch.tv/jbrags46"
      });

      antispam(client, {
        limitUntilWarn: 5, 
        limitUntilMuted: 7,
        interval: 3000,
        warningMessage: "If you don't stop from spamming, I'm going to punish you!", 
        muteMessage: "User was auto muted",
        maxDuplicatesWarning: 3,
        maxDuplicatesMute: 5, 
        ignoredRoles: ["┃Moderator┃", "Criminal"],
        mutedRole: "Criminal", 
        timeMuted: 1000 * 600, 
        logChannel: "antispam-logs"
      });
      
});


client.on('message', message =>{

    client.emit('checkMessage', message);


    if(!message.content.startsWith(prefix) || message.author.bot) return;

 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    
    if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command == 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if (command == 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if (command == 'invite'){
        client.commands.get('invite').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'modc'){
        client.commands.get('modc').execute(message, args, Discord);
    } else if (command == 'insta'){
        client.commands.get('insta').execute(message, args, Discord);
    } else if (command == 'tiktok'){
        client.commands.get('tiktok').execute(message, args, Discord);
    } else if (command == 'tryouts'){
        client.commands.get('tryouts').execute(message, args, Discord);
    } else if (command == 'unwarn'){
        client.commands.get('unwarn').execute(message, args);
    } else if (command == 'bomb'){
        client.commands.get('bomb').execute(message, args);
    } else if (command == 'vote'){
        client.commands.get('vote').execute(message, args);
    } else if (command == 'jail'){
        client.commands.get('jail').execute(message, args);
    } else if (command == 'free'){
        client.commands.get('free').execute(message, args);
    } else if (command == 'watchlist'){
        client.commands.get('watchlist').execute(message, args, Discord);
    } else if (command == 'modapplication'){
        client.commands.get('modapplication').execute(message, args, Discord);
    } else if (command == 'owner'){
        client.commands.get('owner').execute(message, args, Discord);
    }

    




    
});

client.on('message', message => {
    if (message.content === 'When are tryouts?') {
        message.channel.send('We are no longer doing tryouts. We are now recruiting off of clips and playtime with currenty members! If you have any questions please dm a <@&773955342748352522>');
    } else if (message.content === 'when are tryouts?') {
        message.channel.send('We are no longer doing tryouts. We are now recruiting off of clips and playtime with currenty members! If you have any questions please dm a <@&773955342748352522>');
    } else if (message.content === 'When are tryouts') {
        message.channel.send('We are no longer doing tryouts. We are now recruiting off of clips and playtime with currenty members! If you have any questions please dm a <@&773955342748352522>');
    } else if (message.content === 'when are tryouts') {
        message.channel.send('We are no longer doing tryouts. We are now recruiting off of clips and playtime with currenty members! If you have any questions please dm a <@&773955342748352522>');
    } else if (message.content === 'When is tryouts?') {
        message.channel.send('We are no longer doing tryouts. We are now recruiting off of clips and playtime with currenty members! If you have any questions please dm a <@&773955342748352522>');
    } else if (message.content === 'when is tryouts?') {
        message.channel.send('We are no longer doing tryouts. We are now recruiting off of clips and playtime with currenty members! If you have any questions please dm a <@&773955342748352522>');
    } else if (message.content === 'When is tryouts') {
        message.channel.send('We are no longer doing tryouts. We are now recruiting off of clips and playtime with currenty members! If you have any questions please dm a <@&773955342748352522>');
    } else if (message.content === 'when is tryouts') {
        message.channel.send('We are no longer doing tryouts. We are now recruiting off of clips and playtime with currenty members! If you have any questions please dm a <@&773955342748352522>');
    } else if (message.content === 'Noob') {
        message.channel.send('No u');
    } else if (message.content === '🍆') {
        if(!message.member.roles.cache.has('773617923616276522')){
        message.react("🍆")
        message.react("🇾")
        message.react("🇺")
        message.react("🇲")
        }
    } 


if(message.content.includes("fuck")){
    message.delete();
    message.reply('Hey, no cursing')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
} else if(message.content.includes("Fuck")){
    message.delete();
    message.reply('Hey, no cursing')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
} else if(message.content.includes("shit")){
    message.delete();
    message.reply('Hey, no cursing')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
} else if(message.content.includes("Shit")){
    message.delete();
    message.reply('Hey, no cursing')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
} else if(message.content.includes("Faggot")){
    let muteRole = message.guild.roles.cache.find(role => role.name === 'Criminal');
    message.delete();
    message.reply('Hey, no cursing. That is a serious bad word so auto-mute.')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
      message.guild.members.fetch(message.author)
      .then(member => {
        memberTarget.roles.add(muteRole.id);
  });

} else if(message.content.includes("faggot")){
    let muteRole = message.guild.roles.cache.find(role => role.name === 'Criminal');
    message.delete();
    message.reply('Hey, no cursing. That is a serious bad word so auto-mute.')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
      message.guild.members.fetch(message.author)
      .then(member => {
        message.author.roles.add(muteRole.id);
  });
} else if(message.content.includes("Poop")){
    message.delete();
    message.reply('Hey, no cursing')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
} else if(message.content.includes("poop")){
    message.delete();
    message.reply('Hey, no cursing')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
}  else if(message.content.includes("nigga")){
    let muteRole = message.guild.roles.cache.find(role => role.name === 'Criminal');
    message.delete();
    message.reply('Hey, no cursing. That is a serious bad word so auto-mute.')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
      message.guild.members.fetch(message.author)
      .then(member => {
        memberTarget.roles.add(muteRole.id);
  });

}  else if(message.content.includes("Nigga")){
    let muteRole = message.guild.roles.cache.find(role => role.name === 'Criminal');
    message.delete();
    message.reply('Hey, no cursing. That is a serious bad word so auto-mute.')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
      message.guild.members.fetch(message.author)
      .then(member => {
        message.author.roles.add(muteRole.id);
  });

}  else if(message.content.includes("nigger")){
    let muteRole = message.guild.roles.cache.find(role => role.name === 'Criminal');
    message.delete();
    message.reply('Hey, no cursing. That is a serious bad word so auto-mute.')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
      message.guild.members.fetch(message.author)
      .then(member => {
        memberTarget.roles.add(muteRole.id);
  });

}  else if(message.content.includes("Nigger")){
    let muteRole = message.guild.roles.cache.find(role => role.name === 'Criminal');
    message.delete();
    message.reply('Hey, no cursing. That is a serious bad word so auto-mute.')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
      message.guild.members.fetch(message.author)
      .then(member => {
        memberTarget.roles.add(muteRole.id);
  });

}














if(message.content.includes("tryouts")){
    if(!message.member.roles.cache.has('773617923616276522')){
    message.reply('We are no longer doing tryouts. We are now recruiting off of clips and playtime with currenty members! If you have any questions please dm a <@&773955342748352522>')
    .then(msg => {
        msg.delete({ timeout: 5000 })
      })
    }
} else if(message.content.includes("Tryouts")){
    if(!message.member.roles.cache.has('773617923616276522')){
        message.reply('We are no longer doing tryouts. We are now recruiting off of clips and playtime with currenty members! If you have any questions please dm a <@&773955342748352522>')
        .then(msg => {
            msg.delete({ timeout: 5000 })
          })
        }
} else if(message.content.includes("tryout")){
    if(!message.member.roles.cache.has('773617923616276522')){
        message.reply('We are no longer doing tryouts. We are now recruiting off of clips and playtime with currenty members! If you have any questions please dm a <@&773955342748352522>')
        .then(msg => {
            msg.delete({ timeout: 5000 })
          })
        }
} else if(message.content.includes("Tryout")){
    if(!message.member.roles.cache.has('773617923616276522')){
        message.reply('We are no longer doing tryouts. We are now recruiting off of clips and playtime with currenty members! If you have any questions please dm a <@&773955342748352522>')
        .then(msg => {
            msg.delete({ timeout: 5000 })
          })
        }
} else if(message.content.includes("carrot")){
    if(!message.member.roles.cache.has('773617923616276522')){
        message.reply('carrot. I think its uhhhh, I think itssssss uh, I think its a carrot.')
        .then(msg => {
            msg.delete({ timeout: 5000 })
          })
        }

} else if(message.content.includes("Carrot")){
    if(!message.member.roles.cache.has('773617923616276522')){
        message.reply('carrot. I think its uhhhh, I think itssssss uh, I think its a carrot.')
        .then(msg => {
            msg.delete({ timeout: 5000 })
          })
        }

}

if(message.content.includes("https://discord.gg/")){
    if(!client.channels.cache.get("773597207281532928")){
            message.reply('please self promote in <#773597207281532928>!')
            .then(msg => {
                msg.delete({ timeout: 5000 })
              })
            }
}


    
    
});



client.login('Nzg3MTI0NjAxMTI0NjgzNzk3.X9QY6A.5zo0QX5pktrfOpNfPaLi_LtcPVU');

