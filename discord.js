const Discord = require('discord.js')
const randomFile = require('select-random-file')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', msg => {
    if (msg.content.toLowerCase().includes('jebać anime') || msg.content.toLowerCase().includes('jebac anime')) {
        randomFile("./Anime", (err, file) => {
            if (err) throw err
            msg.reply("Ciebie też", { files: ["./Anime/" + file] })
        })
    }
})
client.login('NzY3NzIxNzUzNTQzNTczNTA0.X42CmQ.OQXVv1nfdOuEiyop8eJGOzGcoCQ')