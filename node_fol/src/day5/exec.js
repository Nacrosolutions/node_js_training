
console.log("This file is " + __filename);
console.log("It's located in " + __dirname);

console.log("The current dir: " + process.cwd());

try {
	process.chdir("/G");  //  alt. use a non-existent path e.g. /ho
} catch (exception) {
	console.error("\nchdir error: " + exception.message);
}
console.log("\nThe current dir now: " + process.cwd());

console.log(process.execPath);