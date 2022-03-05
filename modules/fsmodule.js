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

// to run in node use (node node.js)
// cd .. to return to parent folder

// __dirname - path to current directory
// __filename - file name
// require  - function to use modules
// module - infor about current module(file)
// process - infor about env where the program is executed

// "type": "module", include this in package.json to convert to es6
// import { dan } from "./modules/module.js";
// import { hello } from "../MERN/modules/module.js";
// console.log(dan);
// hello("brandon");

// require("../MERN/modules/runmodule");
// const names = require("../MERN/modules/module.js");
// const arr = require("../MERN/modules/module");
// console.log(names.john, names.mike);
// console.log(arr.arr);

// const http = require("http");
// const server = http.createServer((req, res) => {
// 	if (req.url === "/") {
// 		res.end("homepage");
// 	}
// 	if (req.url === "/about") {
// 		// Blocking code ex.nested for loop
// 		for (let i = 0; i < 1000; i++) {
// 			for (let i = 0; i < 1000; i++) {
// 				console.log(i, j);
// 			}
// 		}
// 		res.end("homepage");
// 	}
// 	res.end("Error page");
// });

// // listen is asynchronous: listen is setting up the server
// server.listen(5000, () => {
// 	console.log("Server listening on port 5000...");
// });
