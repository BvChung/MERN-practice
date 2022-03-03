const http = require("http");

// request and response
// have to return res.end() if not -> causes error
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Home Page");
	} else if (req.url === "/about") {
		res.end("About Page");
	} else {
		res.end(
			`<h1>Oops!</h1>
<p>We can't seem to find the page you are looking for </p>
    <a href="/"> backhome </a>`
		);
	}
});

// is localhost:5000
server.listen(5000);
