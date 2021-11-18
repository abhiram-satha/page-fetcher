const fs = require('fs');


const commandArg = process.argv.slice(2);

const fileName = commandArg[1];

const dataWebsite = commandArg[0];



// fs.writeFile(fileName, 'hello', 'UTF8', (err) => {
//   if (err) {
//     return console.log('err');
//   } else {
//     console.log('it has been saved');
//   }
// })
