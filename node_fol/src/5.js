const   async = require("async");  // npm  install async


async.parallel([

	function(callback) {
		setTimeout(function() {
			console.log("Task 1");
			callback(null, 1);
		}, 300);
	},

	function(callback) {
		setTimeout(function() {
			console.log("Task 2");
			callback(null, 2);
		}, 400);
	},

	function(callback) {
		setTimeout(function() {
			console.log("Task 3");
			callback(null, 3);
		}, 100);
	}

], function(error, results) {
	console.log("final content of the array: ", results);
});