const fs = require('fs');
const request = require('request');

const commandArg = process.argv.slice(2);

const fileName = commandArg[1];

const dataWebsite = commandArg[0];

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
      console.log(fileSizeInBytes);
      console.log(`Downloaded and saved ${fileSizeInBytes} btyes to ${fileName}`);
    }
  })
});


