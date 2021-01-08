module.exports = {
    name: 'tryouts',
    description: "Sends tryouts time",
    execute(message, args){
        message.channel.send("We are no longer doing tryouts. We are now recruiting off of clips and playtime with current members! If you have any questions please dm a <@&773955342748352522>")
        .then(msg => {
            msg.delete({ timeout: 10000 })
          })

    }
}