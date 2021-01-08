module.exports = {
    name: 'vote',
    description: "Vote message",
    execute(message, args){
        message.react("👍")
        message.react("👎")
        message.reply('Vote held! You can edit the prefix out now!')
        .then(msg => {
          msg.delete({ timeout: 3000 })
        })


    }
}