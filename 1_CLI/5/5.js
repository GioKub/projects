let argument = process.argv
let hashFiles = require('hash-files');

hashFiles(argument[2], (error, hash)=>{
 
    if (error) {
        console.error(error)
        return
    }
    
    console.log(hash)
})

