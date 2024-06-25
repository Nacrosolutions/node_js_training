const fs = require('fs');

const readableStream = fs.createReadStream('../data/test1.txt');
let data = '';

readableStream.setEncoding('utf8');
 
readableStream.on('data', function(block) {
	console.log(">> block recvd.");
    data+=block;
});
 
readableStream.on('end', function() {
	console.log(">> File IO ended.") ;
    // console.log(data);
});
