var mongoClient = require("mongodb").MongoClient,
	url = "mongodb://localhost/statistics";

var express = require("express"),
	bodyParser = require("body-parser");

var database;
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("../client"));



app.post("/countries", urlencodedParser, function(request, response){
	var form = request.body,
		areaLowerBound = Numder(form.areaLowerBound),
		areaUpperBound = Number(form.areaUpperBound);
	if(areaLowerBound !== NaN && areaUpperBound !== NaN) {
		var countries = database.collection("countries"), query;
		query = {
			area: {
				$gte: areaLowerBound,
				$lte: areaUpperBound
			}	
		};
		if (form.englishSpeaking === "on") {
			query.englishSpeaking = true;
		}
		countries.find(query).toArray(function(err, documents) {
			response.send(JSON.stringify(documents));
		});
	}
	else {
		response.sendStatus(400);
	}
});

mongoClient.connect(url, function(err, db) {
	database = db;
	
	app.listen(591);
});