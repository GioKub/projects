const fs = require("fs"),
readline = require("readline"),
stream = require("stream");
const filename = process.argv[2];
const instream = fs.createReadStream(filename);
const outstream = new stream();
outstream.readable = true;
outstream.writable = true;
const rl = readline.createInterface({
  input: instream,
  output: outstream,
  terminal: false,
});
rl.on("line", function (line) {
  console.log(line);
});