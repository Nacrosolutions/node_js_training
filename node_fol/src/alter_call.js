const fs = require("fs");
const fsPromises = fs.promises;
const textFile = __dirname + "/data/input.txt";


async function readFileFrom (text) {
    try {
    const dt=await fsPromises.readFile(text,'utf-8');
    console.log(dt)
    }
    catch(e){
        console.log(e)
    }
}

readFileFrom(textFile)
//   fsPromises
//     .readFile(textFile)
//     .then((data) => {
//       console.log("\n\n===>>> data: " + data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });