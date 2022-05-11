let argument = process.argv
let crypto = require('crypto');
const fs = require('fs')

//adds newline
fs.readFile(argument[2], 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    
    let hash = crypto.createHash('md5').update(data).digest('hex');
    console.log(hash)
})