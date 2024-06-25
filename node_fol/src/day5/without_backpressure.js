const fs = require('fs');
const readableStream = fs.createReadStream('./data/bigfile.txt');

let data = '';
let chunk;

readableStream.on('readable', function() {
    while ((chunk=readableStream.read()) != null) {
        data += chunk;
        // console.log(chunk);
        console.log(chunk.length);
    }
});

readableStream.on('end', function() {
    // console.log(data)
    console.log("data read completed.")
});