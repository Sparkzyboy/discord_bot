module.exports = {
    name: 'ban',
    description: "bans a member",
    execute(message, args){
        if(message.member.roles.cache.has('773954661811093584')){
            
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send("User has been Banned")
                .then(msg => {
                    msg.delete({ timeout: 10000 })
                  })
            }

        } else {
            message.channel.send('You dont have permission to use the command `+ban`')
            .then(msg => {
                msg.delete({ timeout: 10000 })
              })
        }


    }
}