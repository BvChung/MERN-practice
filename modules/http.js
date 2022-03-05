const express = require("express");
const path = require("path");

const app = express();

// Setup static and middleware
// static are items that do not have to be changed (js, imgs, css)
app.use(express.static("./public"));

// app.get("/", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "./public/index.html"));
// });

app.all("*", (req, res) => {
	res.status(404).send("resource not found");
});

app.listen(5000, () => {
	console.log("Server port: 5000");
});

// const http = require("http");

// // request and response
// // have to return res.end() if not -> causes error
// const server = http.createServer((req, res) => {
// 	if (req.url === "/") {
// 		res.end("Home Page");
// 	} else if (req.url === "/about") {
// 		res.end("About Page");
// 	} else {
// 		res.end(
// 			`<h1>Oops!</h1>
// <p>We can't seem to find the page you are looking for </p>
//     <a href="/"> backhome </a>`
// 		);
// 	}
// });

// // is localhost:5000
// server.listen(5000);
