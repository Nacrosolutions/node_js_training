const {createReadStream, createWriteStream, read} = require('fs');

const readStream= createReadStream(__dirname+'../../data/bigfile.txt')
const writeStream=createWriteStream(__dirname+'../../data/bigback.txt')


readStream.on('data',(chunk)=>{
// console.log("Chunks",chunk)

const result=writeStream.write(chunk);

if(!result) {
 readStream.pause();   
}
})

readStream.on('error',(err)=>{
    console.log("Error happend",err)
})



readStream.on('end',()=>{
    console.log("EOF<<")
})

writeStream.on('drain',()=>{
    readStream.resume()
})

writeStream.on('close',()=>{
    console.log("Ended")
})