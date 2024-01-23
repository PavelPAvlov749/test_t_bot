require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');

const polig_bot_config = {
    autoStart : true,
    interval : 300
}

const error_handler = (error) => {
    
    console.log(error.data.error.message);
}


const bot = new TelegramBot(process.env.TELEGRAM_BOT_API_TOKEN, {

    polling: polig_bot_config
    
});
console.log("start")
bot.on('text', async msg => {

    await bot.sendMessage(msg.chat.id, msg.text);

})

// bot.on('polling_error',error_handler);
