const Discord = require('discord.js')
const randomFile = require('select-random-file')
require('dotenv').config()
const client = new Discord.Client()

const animeMsg = ['jebać anime', 'jebac anime', 'jevac anime', 'jebać animu', 'jebac animu', 'j e b a c a n i m e', 'j e b a c a n i m e', 'jeba anime', "Jebač anime"]
const noAnime = ['no anime', 'n o a n i m e']

const simpMsg = ['simp', 's i m p']

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
    // if (msg.author.id == "412266826983145482")
    //     return

    simpMsg.every((element, index) => {
        if (msg.content.toLowerCase().includes(element)) {
            randomFile("./Simp", (err, file) => {
                if (err) throw err;
                msg.reply("We live in a society of simps", { files: ["./Simp/" + file] })
            })

            return false
        }
        else return true
    })

    animeMsg.every((element, index) => {
        if (msg.content.toLowerCase().includes(element) && msg.author.id != "767721753543573504") {
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

    if (msg.author.id === "701147331856302200") {
        msg.react(msg.guild.emojis.cache.get("860233416405418044"))

        const letters = ['🇵', '🇪', '🇳', '🇮', '🇸', '🇨', '🇭', '🇺', '🇯']

        letters.forEach((letter) => {
            msg.react(letter)
        })
    }
    else if (msg.author.id === "754370551086055496")
        msg.react(msg.guild.emojis.cache.get("807989161839034452"))
    else if (msg.author.id === "834314818248507452")
        msg.react(msg.guild.emojis.cache.get("808006588975153153"))
    else if (msg.author.id === "351997517572997132") {
        const letters = ['🇸', '🇮', '🇲', '🇵']

        letters.forEach((letter) => {
            msg.react(letter)
        })
    }

    if (msg.content == "Jednorazowe losu losu") {
        msg.reply(Math.floor(Math.random() * (2 - 1 + 1)) + 1)
    }
})

client.login(process.env.BOT_TOKEN)