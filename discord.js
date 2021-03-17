const Discord = require('discord.js')
const randomFile = require('select-random-file')
require('dotenv').config()
const client = new Discord.Client()

const animeMsg = ['jebać anime', 'jebac anime', 'jevac anime', 'jebać animu', 'jebac animu', 'j e b a c a n i m e', 'j e b a c     a n i m e']
const noAnime = ['no anime', 'n o a n i m e']

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
    //Sending messages
    animeMsg.every((element, index) => {
        if (msg.content.toLowerCase().includes(element)) {
            randomFile("./Anime", (err, file) => {
                if (err) throw err
                msg.reply("Ciebie też", { files: ["./Anime/" + file] })
            })
            return false
        }
        else return true
    })
    noAnime.every((element, index) => {
        if (msg.content.toLowerCase().includes(element)) {
            randomFile("./Anime", (err, file) => {
                if (err) throw err
                msg.reply("No gays", { files: ["./Anime/" + file] })
            })
            return false
        }
        else return true
    })
    //
})

client.login(process.env.BOT_TOKEN)