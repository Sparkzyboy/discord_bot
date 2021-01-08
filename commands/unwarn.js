module.exports = {
    name: 'unwarn',
    description: "This unwarns a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(message.member.roles.cache.has('773954661811093584')){

            let memberTarget = message.guild.members.cache.get(target.id);
            
            if(target){
                message.channel.send(`<@${memberTarget.user.id}> has been unwarned, current offenses: 0`)
                .then(msg => {
                    msg.delete({ timeout: 10000 })
                  })
            }else{
                message.channel.send('Cant find that member!');
            }
            
                
        }
        else{
            message.channel.send('You dont have permission to use the command `+unwarn`')
            .then(msg => {
                msg.delete({ timeout: 10000 })
              })
            
        }
    }
}