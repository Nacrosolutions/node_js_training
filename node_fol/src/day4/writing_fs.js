const fs = require('fs');


const wstream = fs.createWriteStream('./test2.txt');

wstream.on('finish', function () {
    console.log('file has been written');
});

wstream.write('Using stream to write text\n');
wstream.write('Another line of text.');
wstream.end();