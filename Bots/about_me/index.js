const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5252843840:AAGwfNjnsbZHwdTaWRBy5uKJ9SpbRCc-YX0';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    switch (msg.text) {
        case '/about':
            bot.sendMessage(chatId, 'provides short info about you');
            break;
        case '/links':
            bot.sendMessage(chatId, 'provides list of your social links (github, linkedid, etc)');
            break;
        case '/start':
        case '/help':
            bot.sendMessage(msg.chat.id, 'for more functionaly please click one of the buttons below', {
                'reply_markup': {
                    'keyboard': [['/links', '/about']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                    force_reply: true,
                }
            });
            break;
        default:
            bot.sendMessage(chatId, 'command not recognised, please type /start or /help to get help');
  }
});



