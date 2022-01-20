const fs = require('fs')
const request = require('request')

const args = process.argv.slice(2)
const URLPath = args[0];
const localPath = args[1];
//console.log(URLPath, localPath);
const fileWriter = (URLPath, localPath) => {
  request(URLPath, (error, response, body) => {

    fs.writeFile(localPath, body, (err) => {
      if (err) {
        console.error(err)
        //return
      } else { 
        console.log(`file copied! Downloaded size: ${body.length} bytes.`) 
      }

    })
  })
}

fileWriter(URLPath, localPath);