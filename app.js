const Telegraf = require('telegraf')

const bot = new Telegraf('5286036079:AAElF9ZXiyIpe24WY4Jz0fmSdQ4t4odFb8w');



// //code
// bot.start((ctx) => {
//     ctx.reply("welcome")
// })

// bot.help((ctx) => {
//     ctx.reply("help will come " + ctx.from)
// })

bot.command(["SC", "Sc", "sc", "smartcontract"], (ctx) => {
    ctx.reply("0xf0d35f96ad8cefca54e048bf1569b5fd94c27dc1")
})

bot.hears(["SC", "Sc", "sc", "smart contract"], (ctx) => {
    ctx.reply("0xf0d35f96ad8cefca54e048bf1569b5fd94c27dc1")
})


bot.launch();
