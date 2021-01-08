module.exports = {
    name: 'modc',
    description: "Send moderator perms",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#D500FF')
        .setTitle('Mod Commands')
        .setDescription('Here is a list of commands that mods can use!')
        .addFields(
            {name: '+mute', value: 'Mutes a member'},
            {name: '+unmute', value: 'Unmutes a member'},
            {name: '+ban', value: 'Permantley removes a member from the server'},
            {name: '+kick', value: 'Temporarily removes a member from the server'},
            {name: '+jail', value: 'Sends a member to jail!, they will recieve the <@&780883420640837703> role'},
            {name: '+free', value: 'Frees a member from jail!'},
        )
        .setFooter('Bot created by SparkyKR#7325')

        message.channel.send(newEmbed)
        .then(msg => {
            msg.delete({ timeout: 10000 })
          })

    }
}