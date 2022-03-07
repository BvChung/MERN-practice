// Documentation: https://expressjs.com/en/guide/writing-middleware.html
const express = require("express");
const app = express();

let { people } = require("./data");

// How to include static assets
app.use(express.static("./public"));

// Parse form data
app.use(express.urlencoded({ extended: false }));

// Parse json
app.use(express.json());

// Traditional form
app.post("/login", (req, res) => {
	// console.log(req);
	console.log(req.body);
	const { name } = req.body;
	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	} else {
		return res.status(401).send("Please provide credentials");
	}
});

// JS form
app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
	console.log(req.body);
	const { name } = req.body;

	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "Please provide name value" });
	} else {
		res.status(201).json({ success: true, person: name });
	}
});

app.listen(5000, () => {
	console.log("Server port: 5000");
});
