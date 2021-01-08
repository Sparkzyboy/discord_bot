module.exports = {
    name: 'free',
    description: "This frees a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(message.member.roles.cache.has('773954661811093584')){
            if(target){

                let muteRole = message.guild.roles.cache.find(role => role.name === 'Criminal');
 
                let memberTarget= message.guild.members.cache.get(target.id);
 
                memberTarget.roles.remove(muteRole.id);

                message.channel.send(`<@${memberTarget.user.id}> has been freed!`)
                .then(msg => {
                    msg.delete({ timeout: 10000 })
                  }) 
                
            }else{
                message.channel.send('Cant find that member!')
                .then(msg => {
                    msg.delete({ timeout: 10000 })
                  })
            }
            
                
        }
        else{
            message.channel.send('You dont have permission to use the command `+free`')
            .then(msg => {
                msg.delete({ timeout: 10000 })
              })
            
        }
    }
}