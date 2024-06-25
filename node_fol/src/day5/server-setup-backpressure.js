const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const readStream = fs.createReadStream(__dirname + '/data/bigfile.txt');

  readStream
    .on('data', (chunk) => {
      console.log("reading a chunk") ;
      
      const canReadNext = res.write(chunk);
      if (!canReadNext) {
        console.log("pausing") ;
        readStream.pause();
        res.once('drain', () => {readStream.resume(); console.log("resuming")})
      }
    })
    .on('end', () => {res.end(); console.log("EOF")})
    .on('error', (e) => {res.destroy(); console.log("my error:", e.code)});
});

server.listen(3000, () => console.log("Streamimg Server with backpressure, on 3000"));