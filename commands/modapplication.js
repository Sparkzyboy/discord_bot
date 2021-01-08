module.exports = {
    name: 'modapplication',
    description: "Displays modap to the server",
    execute(message, args){
        message.channel.send('https://docs.google.com/forms/d/e/1FAIpQLSd4zV8AhyPb4nxbqaPQHoYpp05CjyKN3aAVF4nt3usMME6akQ/viewform?usp=sf_link')
        .then(msg => {
            msg.delete({ timeout: 10000 })
          })
    }
}