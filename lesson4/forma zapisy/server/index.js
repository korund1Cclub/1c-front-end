/* установить mongodb */
var mongoClient = require("mongodb").MongoClient,
	url = "mongodb://localhost/enrollment";

/* установить express */
var express = require("express"),
	/* установить body-parser */
	bodyParser = require("body-parser");

var database;
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false});

/* Использование статических файлов из папки client */
app.use(express.static("../client"));

app.post("/enroll", urlencodedParser, function(request, response){
	/* значения текстовых полей сохраняются в переменную request.body.firstName и request.body.lastName*/
	var records = database.collection("records");
	records.insert({
		firstName: request.body.firstName,
		lastName: request.body.lastName
	}, function(err, result) {
		response.redirect("/records.html");		   
	});
});

/* Подключение к базе данных */
app.get("/records", function(request, response) {
	var records = database.collection("records");
		records.find().toArray(function(err, documents) {
			response.send(JSON.stringify(documents));
		});
});


mongoClient.connect(url, function(err, db) {
	database = db;
	/* запускаем сервер не раньше чем подключаемся к базе */
	app.listen(591);
});