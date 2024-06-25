const buf1 = new Buffer.from('abcdef!');
console.log("buf1: ", buf1);
console.log("buf1: ", buf1.toString());


//Binary data to base 64
const buf2 = new Buffer.from('8b76fde713ce', 'base64');
console.log("buf2: ",buf2);
console.log("buf2: ",buf2.toString('utf-8'));
