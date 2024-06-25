const os = require('os');


const currentOS = {
    name: os.type(),
    architecture: os.arch(),
    platform: os.platform(),
    release: os.release(),
    version: os.version()
};

console.log(currentOS);

console.log(`The server has been up for ${os.uptime()} seconds.`);
console.log("user info: \n", os.userInfo());


const totalMem = os.totalmem();
console.log(totalMem);

const freeMem = os.freemem();
console.log(freeMem);
console.log("percentage used: ", ((freeMem / totalMem) * 100).toFixed(2)  )