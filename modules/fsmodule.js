const { readFileSync, writeFileSync, readFile } = require("fs");

// Synchronous
// const first = readFileSync("../modules/subfolder/text.txt", "utf8");
// console.log(first);

// writeFileSync("../modules/subfolder/first.txt", "Changed", { flag: "a" });
// console.log("here");

// Asynchronous;
readFile("../modules/subfolder/first.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(result);
});
