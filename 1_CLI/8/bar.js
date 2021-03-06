const cliProgress = require('cli-progress');

// create a new progress bar instance and use shades_classic theme
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

// start the progress bar with a total value of 200 and start value of 0
bar1.start(100, 0);

// update the current value in your application..
bar1.update(30);

// stop the progress bar
bar1.stop();

// 20/10=2 100/2=50