//need schedule jobs in cron and specific time
//also find out what is the deal with crontab

const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');
const User = require('./models/user')
const cron = require('node-cron');

//0 0 23 * *
//this will run the job at 23:00:00 every day
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test').then(()=>console.log('connected to mongoDB'));
}

const token = '5252843840:AAGwfNjnsbZHwdTaWRBy5uKJ9SpbRCc-YX0';

const bot = new TelegramBot(token, {polling: true});

bot.on("polling_error", (err) => console.log(err));

bot.onText(/\/subscribe (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const date = match[1]; 

  const user = new User({
    username: msg.from.first_name,
    chatId: msg.chat.id,
    date: date
  });


  /*
  let timesplit = date.split(":")
  cron.schedule(`${timesplit[1]} ${timesplit[0]} * * * *`, () => {
    console.log(`running a task at ${timesplit[1]} ${timesplit[0]}`);
  });
  */
  User.find({'chatId': chatId}).then((users) => {
    console.log('data provide -->' + date)
    //if there are no users with such id
      if(users.length===0){
        user.save().then(() => console.log('user added to DB'));
      }else{
        //console.log(users)
        User.updateOne({'chatId': chatId}, {$set: {"date":date}})
        .then((res) => console.log(res))
        .catch(err => console.error(err));
       
        
        //update time of existing user here, maybe you don't even need else
      }      
  });
});


bot.on('message', (msg) => {
 
});