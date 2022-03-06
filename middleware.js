const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const authorize = require("./middleware/authorize");

// request => middleware (functions) => response

// Invokes middleware functions to all routes
// app.use([logger, authorize]); // order matters when placed in middleware array

// Can add specific path to invoke the middleware
// app.use('/api', logger);

// Middleware is important as it can be accessed anywhere
// and contain information about user in any route

app.get("/", (req, res) => {
	res.send("Home");
});

app.get("/about", (req, res) => {
	res.send("About");
});

app.get("/about/products", (req, res) => {
	res.send("Products");
});

app.get("/about/item", [logger, authorize], (req, res) => {
	console.log(req.user);
	res.send("Item");
});

app.listen(5000, () => {
	console.log("Server port: 5000");
});
