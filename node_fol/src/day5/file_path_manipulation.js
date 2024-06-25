
const path = require("path");

process.env.PATH.split(path.delimiter).forEach(function(dir) {
	// console.log(dir);
});



const fileName = "C:\\Program Files\\nodejs\\node.exe";

const  file = path.basename(fileName);
console.log("basename: ", file);

const extension = path.extname(fileName);
const  file02 = path.basename(fileName, extension);
console.log("with extn: ", file02, extension);