let argument = process.argv
let crypto = require('crypto');
let hash = crypto.createHash('md5').update(argument[2]).digest('hex');
console.log(hash); 