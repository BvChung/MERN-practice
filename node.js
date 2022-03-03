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

// console.log("example");
// console.log(__dirname);

const names = require("../MERN/modules/module.js");
const arr = require("../MERN/modules/module");
// require("../MERN/modules/runmodule");

console.log(names.john, names.mike);
console.log(arr.arr);
console.log("nodemon");
