let myresults = [];

setTimeout(function() {
	console.log("Task 1");
	myresults[0] = 1;
	console.log("final content of the array: ",  myresults) ;
}, 300);

setTimeout(function() {
	console.log("Task 2");
	myresults[1] = 2;
}, 200);

setTimeout(function() {
	console.log("Task 3");
	myresults[2] = 3;
}, 100);

console.log(myresults) ;