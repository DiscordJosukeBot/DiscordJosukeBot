const Discord = require('discord.js')
const randomFile = require('select-random-file')
require('dotenv').config()
const client = new Discord.Client()

const animeMsg = ['jebać anime', 'jebac anime', 'jevac anime', 'jebać animu', 'jebac animu', 'j e b a c a n i m e']

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
    //const cuttedMsg = msg.content.toLowerCase().includes('jebać anime')

    for (let element of animeMsg) {
        if (msg.content.toLowerCase().includes(element)) {
            randomFile("./Anime", (err, file) => {
                if (err) throw err
                msg.reply("ciebie też", { files: ["./Anime/" + file] })
            })
        }
        break
    }

    // if (cuttedMsg === 'jebać anime' || cuttedMsg === 'jebac anime') {
    //     randomFile("./Anime", (err, file) => {
    //         if (err) throw err
    //         msg.reply("Ciebie też", { files: ["./Anime/" + file] })
    //     })
    // }
})
client.login(process.env.BOT_TOKEN)