const fs = require('fs');

const content = 'A line of text written ......';

fs.writeFile('./data/test3.txt', content, err => {
  if (err) {
    console.error(err);
  }
  console.log("file written successfully");

});