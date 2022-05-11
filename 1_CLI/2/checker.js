const util = require('util');
const exec = util.promisify(require('child_process').exec);

let tools = ["docker", "nvm", "git", "npm", "node"]

async function check() {
    for (let tool of tools ){
        try{
            const { stdout} = await exec(`${tool} --version`)
            process.stdout.write(`stdout:\n${stdout} \n`);
        }
        catch(e){
            process.stderr.write(`sdterr: ${e} \n`);
        }
    }
}

check()