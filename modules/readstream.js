const { createReadStream } = require("fs");
const { Http2ServerRequest } = require("http2");

// createReadStream reads big files in chunks

const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
	console.log(result);
});
// stream.on();

http.createServer(function (req, res) {
	const fileStream = createReadStream("./content/big.txt");
});
