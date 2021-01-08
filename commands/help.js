module.exports = {
    name: 'help',
    description: "Send help message",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#D500FF')
        .setTitle('Help')
        .setDescription('Here is a list of commands that you can use!')
        .addFields(
            {name: 'My prefix - "+"'},
            {name: '+invite', value: 'Displays the servers invite link'},
            {name: '+modc', value: 'Displays moderator commands'},
            {name: '+vote', value: 'bot will react with a thumbs up and down.'},
            {name: '🍆', value: 'Just try it ;)'}

        )
        .setFooter('Bot created by SparkyKR#7325')

        message.channel.send(newEmbed)
        .then(msg => {
            msg.delete({ timeout: 10000 })
          })

    }
}