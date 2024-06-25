const {createReadStream, createWriteStream} = require('fs');
const readStream = createReadStream( __dirname + '/data/bigfile.txt');
const writeStream = createWriteStream(__dirname + '/data/copy.txt', {
  // highWaterMark: 162802
});

readStream.on('data', (chunk) => {
  const result = writeStream.write(chunk);

  if(!result) {
    console.log('backpressure applied.');
    readStream.pause();
  }
})

readStream.on('error', (err) => {
  console.log("An err has occured");
  console.error(err);
})

readStream.on('end', () => {
  console.log('EOF.');  
  writeStream.end();
})

writeStream.on('drain', () => {
  console.log('data drained');
  readStream.resume();
})

writeStream.on('close', () => {
  process.stdout.write('file copied \n');
})
