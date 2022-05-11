const cron = require('node-cron');
cron.schedule('45 16 * * * *', () => {
    console.log('running a task every two minutes');
  });