const logger = function (req, res, next) {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	console.log(method, url, time);

	// Have to invoke next()
	next();
};

// same as export default => can name as anything when imported
module.exports = logger;
