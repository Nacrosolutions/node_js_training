const fs = require("fs");

const textFile = __dirname + "/data/input.txt";

fs.access(textFile, fs.constants.R_OK | fs.constants.W_OK, function (err) {

	if (!err) {
		fs.stat(textFile, function (err, res) {
			if (err) {
				throw err;
			}

			if (res.isFile()) {
				fs.readFile(textFile,"utf-8", function (err, data) {
						if (err) {
							throw err;
						}
						console.log("\n\n===>>  data:\n ", data);
					});
			}
		});
	}
});
