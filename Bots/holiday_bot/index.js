const TelegramBot = require('node-telegram-bot-api');
const countryFlagEmoji = require('country-flag-emoji');
const axios = require('axios');
const { data } = require('country-flag-emoji');
const flags = [{"flag":countryFlagEmoji.get("US").emoji, "code":"US"}, {"flag":countryFlagEmoji.get("RU").emoji, "code":"RU"}, {"flag":countryFlagEmoji.get("CN").emoji, "code":"CN"}, {"falg":countryFlagEmoji.get("GE").emoji, "code":"GE"}]

let now = new Date;
let today = now.getDate();
let month = now.getMonth();
let year = now.getFullYear();

const token = '5252843840:AAGwfNjnsbZHwdTaWRBy5uKJ9SpbRCc-YX0';

const bot = new TelegramBot(token, {polling: true});

//there should be better way to do this, i am just repeteaing giant pice of code 4 times with just different parameters
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    switch (msg.text) {
        //checks if sent emoji is same as USA flag
        case countryFlagEmoji.get("US").emoji:
            axios.get(`https://holidays.abstractapi.com/v1/?api_key=80882927c8094dc4bf67c6520a40bc85&country=US&year=${year}&month=${month}&day=${today}`)
            .then(response => {
                response.data.length===0 
                ?bot.sendMessage(chatId, 'unfortunately today there are no holidays in USA') 
                :bot.sendMessage(chatId, response.data);
            })
            .catch(error => {
                console.log(error);
            });
            break;
        //checks if sent emoji is same as Russia flag    
        case countryFlagEmoji.get("RU").emoji:
            axios.get(`https://holidays.abstractapi.com/v1/?api_key=80882927c8094dc4bf67c6520a40bc85&country=RE&year=${year}&month=${month}&day=${today}`)
            .then(response => {
                response.data.length===0 
                ?bot.sendMessage(chatId, 'unfortunately today there are no holidays in USA') 
                :bot.sendMessage(chatId, response.data);
            })
            .catch(error => {
                console.log(error);
            });
            break;
        //checks if sent emoji is same as China flag
        case countryFlagEmoji.get("CN").emoji:
            axios.get(`https://holidays.abstractapi.com/v1/?api_key=80882927c8094dc4bf67c6520a40bc85&country=CN&year=${year}&month=${month}&day=${today}`)
            .then(response => {
                response.data.length===0 
                ?bot.sendMessage(chatId, 'unfortunately today there are no holidays in USA') 
                :bot.sendMessage(chatId, response.data);
            })
            .catch(error => {
                console.log(error);
            });
            break;
        //checks if sent emoji is same as Georgia flag    
        case countryFlagEmoji.get("GE").emoji:
            axios.get(`https://holidays.abstractapi.com/v1/?api_key=80882927c8094dc4bf67c6520a40bc85&country=GE&year=${year}&month=${month}&day=${today}`)
            .then(response => {
                response.data.length===0 
                ?bot.sendMessage(chatId, 'unfortunately today there are no holidays in USA') 
                :bot.sendMessage(chatId, response.data);
            })
            .catch(error => {
                console.log(error);
            });
            break;
        case '/start':
            bot.sendMessage(msg.chat.id, 'for more functionaly please click one of the buttons below', {
                'reply_markup': {
                    'keyboard': [[countryFlagEmoji.get("US").emoji, countryFlagEmoji.get("RU").emoji, countryFlagEmoji.get("CN").emoji, countryFlagEmoji.get("GE").emoji, 'U+1F1EE U+1F1E9']],
                    resize_keyboard: true,
                    one_time_keyboard: true,
                    force_reply: true,
                }
            });
            break;
        default:
            bot.sendMessage(chatId, 'flag not recognised');
  }
});