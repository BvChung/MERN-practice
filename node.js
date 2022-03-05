const { response } = require("express");
const http = require("http");
const { readFileSync } = require("fs");

// user sends a req to server and a response is sent back

// Use readFileSync to link html to specific urls
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
	console.log("hit the server");
	const url = req.url;
	if (url === "/") {
		// status code and header
		res.writeHead(200, { "content-type": "text/html" });
		// res.end is important as informs that the response is over
		res.write(homePage);
		res.end();
	} else if (url === "/about") {
		res.writeHead(200, { "content-type": "text/html" });
		// res.end is important as informs that the response is over
		res.write("<h1>about page</h1>");
		res.end();
	} else {
		res.writeHead(404, { "content-type": "text/html" });
		// res.end is important as informs that the response is over
		res.write("<h1>Does not exist</h1>");
		res.end();
	}
});

server.listen(5000);
