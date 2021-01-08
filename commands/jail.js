const ms = require('ms');
module.exports = {
    name: 'jail',
    description: "This mutes jails a member",
    execute(message, args) {
        if(message.member.roles.cache.has('773954661811093584')){
            const target = message.mentions.users.first();
            if (target) {
 
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Criminal');
 
                let memberTarget = message.guild.members.cache.get(target.id);
 
                if (!args[1]) {
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been jailed`)
                .then(msg => {
                    msg.delete({ timeout: 10000 })
                  })
                return
                }

                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been jailed for ${ms(ms(args[1]))}`)
                .then(msg => {
                    msg.delete({ timeout: 10000 })
                  })
 
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                }, ms(args[1]));
            }
        } else {
            message.channel.send('You dont have permission to use the command `+jail`')
            .then(msg => {
                msg.delete({ timeout: 10000 })
              })
        }
    }
}