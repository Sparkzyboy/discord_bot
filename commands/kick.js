module.exports = {
    name: 'kick',
    description: "Kicks a member",
    execute(message, args){
        if(message.member.roles.cache.has('773954661811093584')){
            
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.channel.send("User has been kicked")
                .then(msg => {
                    msg.delete({ timeout: 10000 })
                  })
            }

        } else {
            message.channel.send('You dont have permission to use the command `+kick`')
            .then(msg => {
                msg.delete({ timeout: 10000 })
              })
        }


    }
}