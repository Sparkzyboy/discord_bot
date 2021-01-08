module.exports = {
    name: 'tiktok',
    description: "Sends teams tiktok",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#D500FF')
        .setTitle('TikTok')
        .setDescription('You can follow Team Vision on TikTok here!')
        .addFields(
            {name: 'TikTok:', value: 'https://vm.tiktok.com/ZMJ9xWuaA/'},
        )
        .setFooter('Bot created by SparkyKR#7325')

        message.channel.send(newEmbed)
        .then(msg => {
            msg.delete({ timeout: 10000 })
          })

    }
}