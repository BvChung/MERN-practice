const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.json([{ name: "john" }, { name: "susan" }]);
});

app.listen(5000, () => {
	console.log("Server port 5000");
});

// Most used express methods
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.listen
// app.use
