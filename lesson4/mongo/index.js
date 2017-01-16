var mongoClient = require("mongodb").MongoClient,
    url = "mongodb://localhost/sandbox";

/* подключаемся к базе данных */
mongoClient.connect(url, function(err, db){
    /*получаем коллекцию humans*/
    if(err) console.log(err.stack);
    var humans = db.collection("humand");
    /* совершаем запрос Insert */
    humans.insert({
        name: "Alex",
        age: 18
    }, function(err, result){
        /* функция обратного вызова */
        if(err) console.log(err.stack);
        console.log(result);
    });
	
	function performActions(collection, data, query) {
		console.log("Inserting...");
		collection.insert(data, function() {
			console.log("Inserted!");
		});
		console.log("Deleting...");
		collection.deleteMany(query);
	}

});

