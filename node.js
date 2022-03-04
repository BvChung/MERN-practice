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
