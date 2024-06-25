const fs = require('fs');
const file = fs.createWriteStream(  __dirname + '/data/bigfile.txt');

const num_of_lines = 1e3 ;  // 1e3, 1e8

const stats01 = process.memoryUsage() ;
// console.log("start: ", stats01.heapUsed)

for(let i=0; i<= num_of_lines; i++) {
  file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}

const stats02 = process.memoryUsage() ;
// console.log("end: ", stats02.heapUsed)
console.log("consumed - heap & arrayBuf: ", (stats02.heapUsed - stats01.heapUsed), (stats02.arrayBuffers - stats01.arrayBuffers))
file.end();