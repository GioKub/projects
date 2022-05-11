const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios')

const token = '5252843840:AAGwfNjnsbZHwdTaWRBy5uKJ9SpbRCc-YX0';
let KEY = 'de50c2351c6e88cd557f47c32c3bcb88'

const forecast = async (lat, lon) => {
    try {
      return await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${KEY}`)
    } catch (error) {
      console.error(error)
    }
  }
  
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  let future = ['moonrise', 'moonset', 'sunset']
  let location = msg.location
  forecast(location.latitude, location.longitude).then(ss =>{
    let dailyForecast = ss.data.daily[0]
    let resp = {"feels_like": dailyForecast.feels_like.day, "humidity": dailyForecast.humidity, "weather":dailyForecast.weather[0].description}
    //turn object into string
    resp = JSON.stringify(resp)
    //remove brackets
    resp = resp.replace(/[{}]/g, "")
    //remove quotes
    resp = resp.replace(/["]+/g, '')
    //add newlines at the end of each line
    resp = resp.replace(/,/g, '\n');

    bot.sendMessage(chatId, `<b>${resp}</b>`, {parse_mode : "HTML"})
  })

  //bot.sendMessage(chatId, 'Received your message');
  
});