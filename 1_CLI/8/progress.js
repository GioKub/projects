const readline = require('readline');
const fs = require('fs');
var exec = require('child_process').exec;

const cliProgress = require('cli-progress');

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

let count = 0;

async function processLineByLine(last) {
  bar1.start(100, 0);
  const fileStream = fs.createReadStream('./free_company_dataset.csv');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    count += 1;
    bar1.update((Math.round(parseFloat(100/(last/count)).toFixed(1))));
  }
    console.log(`\n ${count}`)
    bar1.stop()
}

//need to use < instead of just wc -l becasue it also displays filename
exec('wc -l < ./free_company_dataset.csv', function (error, results) {
  processLineByLine(results);
});

