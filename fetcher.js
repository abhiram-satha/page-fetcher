const fs = require('fs');
const request = require('request');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const commandArg = process.argv.slice(2);

const fileName = commandArg[1];

const dataWebsite = commandArg[0];

const fileSave = function () {
  request(dataWebsite, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  
    fs.writeFile(fileName, body, 'UTF8', (err) => {
      if (err) {
        return console.log('err');
      } else {
        const stats = fs.statSync(fileName);
        const fileSizeInBytes = stats.size;
        return console.log(`Downloaded and saved ${fileSizeInBytes} btyes to ${fileName}`);
      }
    })
  });
}

if (fs.existsSync(fileName)) {
  readline.question('Would you like to overwrite your current file?', response => {
    if (response === 'Y') {
      fileSave();
      readline.close();
    }
    else {
      console.log('Error');
      readline.close();
    }
  })
} else {
  fileSave();
  readline.close();
}



//https://www.codecademy.com/articles/getting-user-input-in-node-js for the readLine 
//https://techoverflow.net/2012/09/16/how-to-get-filesize-in-node-js/ for the fileSize prompt