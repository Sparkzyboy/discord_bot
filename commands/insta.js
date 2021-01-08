module.exports = {
    name: 'insta',
    description: "Sends teams insta",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#D500FF')
        .setTitle('Instagram')
        .setDescription('You can follow Team Vision on instagram here!')
        .addFields(
            {name: 'Insta:', value: 'https://instagram.com/official_team_vision100?igshid=1p9k0vwigdo25'},
        )
        .setFooter('Bot created by SparkyKR#7325')

        message.channel.send(newEmbed)
        .then(msg => {
            msg.delete({ timeout: 10000 })
          })

    }
}