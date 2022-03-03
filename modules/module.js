// console.log(module);

// Using ES6
// export const dan = "dan";

// export const hello = function (name) {
// 	console.log(`Hello ${name}`);
// };

// Using commonJS
const john = "john";
const mike = "mike";
module.exports = { john, mike };
// same as export default

module.exports.arr = [1, 2, 3];
