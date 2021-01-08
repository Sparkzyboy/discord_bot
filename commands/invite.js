module.exports = {
    name: 'invite',
    description: "Displays invite to the server",
    execute(message, args){
        message.channel.send('https://discord.gg/Txj7AHbFrE')
        .then(msg => {
            msg.delete({ timeout: 10000 })
          })
    }
}