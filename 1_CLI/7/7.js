const fs = require('fs');
const readline = require('readline');

let count = 0;

async function processLineByLine() {
  const fileStream = fs.createReadStream('./free_company_dataset.csv');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    count += 1;
    console.log(`${count}: ${line.split(",")[0]}`);
  }
}

processLineByLine();