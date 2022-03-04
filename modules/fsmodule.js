const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");
const util = require("util");

// Synchronous
// const first = readFileSync("../modules/subfolder/text.txt", "utf8");
// console.log(first);

// writeFileSync("../modules/subfolder/first.txt", "Changed", { flag: "a" });
// console.log("here");

// Asynchronous;
// readFile("../modules/subfolder/first.txt", "utf8", (err, result) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	console.log(result);
// });

// Imported util library that takes care of creating a promise using the callbackfunctions
// Then can use async await to consume the promise
const readFilePromise = util.promisify(readFile);
const writePromise = util.promisify(writeFile);

const getText = async function () {
	try {
		const first = await readFilePromise(
			"../modules/subfolder/first.txt",
			"utf-8"
		);
		const second = await readFilePromise(
			"../modules/subfolder/text.txt",
			"utf-8"
		);
		await writePromise("../modules/subfolder/third.txt", "Third: edited");
		console.log(first, second);
	} catch (err) {
		console.error(err);
	}
};
getText();
