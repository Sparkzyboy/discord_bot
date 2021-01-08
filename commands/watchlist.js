module.exports = {
    name: 'watchlist',
    description: "Sends wantd posters",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#D500FF')
        .setTitle('Watchlist')
        .setDescription('Here is a list of dangerous criminals')
        .addFields(
            {name: 'VSN | Clipzy', value: 'No clue, just hate him for some reason'},
            {name: 'malfeance', value: 'Spoiled kid who said no no word'},
  

        )
        .setFooter('Bot created by SparkyKR#7325')

        message.channel.send(newEmbed)
        .then(msg => {
            msg.delete({ timeout: 10000 })
          })

    }
}