const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
	// res.json(products);
	res.send('<h1>Home Page</h1> <a href="/api/products">products</a>');
});

// Can access specific products w/ route parameters
// req.params is the placeholder /:placeholder => to match product with id
app.get("/api/products/:productID", (req, res) => {
	// console.log(req);
	// console.log(req.params)

	const { productID } = req.params;

	const singleProduct = products.find((product) => product.id === +productID);

	if (!singleProduct) {
		return res.status(404).send("Product does not exist");
	}

	res.json(singleProduct);
});

// http://localhost:5000/api/v1/query?search=a&limit=2
// query?search=a&limit=2 : is the query string paramater
app.get("/api/v1/query", (req, res) => {
	console.log(req.query);
	const { search, limit } = req.query;
	let sortedProduct = [...products];

	if (search) {
		sortedProduct = sortedProduct.filter((product) =>
			product.name.startsWith(search)
		);
	}

	if (limit) {
		sortedProduct = sortedProduct.slice(0, Number(limit));
	}

	if (sortedProduct.length < 1) {
		return res.status(200).json({ success: true, data: [] });
	}

	res.status(200).json(sortedProduct);
});

app.listen(5000, () => {
	console.log("Server port 5000");
});
