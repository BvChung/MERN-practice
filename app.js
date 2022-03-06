// Documentation: https://expressjs.com/en/guide/writing-middleware.html
const express = require("express");
const app = express();
let { people } = require("./data");

app.get("/", (req, res) => {
	res.json(people);
});

app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => {
	console.log("Server port: 5000");
});
