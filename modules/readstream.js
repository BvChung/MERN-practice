const { createReadStream } = require("fs");

// createReadStream reads big files in chunks

const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
	console.log(result);
});
// stream.on();
