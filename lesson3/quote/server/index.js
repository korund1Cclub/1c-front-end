var express = require("express"),
	cors = require("cors"),
	fs = require("fs");

var app = express();
app.use(cors());

app.get("/quote", function(req, res) {
	fs.readFile("database.txt", "utf-8", function(err, content) {
		var quotes = content.split("\n");
		var index = Math.floor(Math.random() * (quotes.length - 1));
		var result = {
			number: index + 1,
			text: quotes[index]
		};
		res.send(JSON.stringify(result));
	});
	
});

app.listen(591);