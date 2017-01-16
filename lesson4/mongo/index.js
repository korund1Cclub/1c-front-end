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
	
	

});

humans.find({age: { $gt: 0}}).toArray(function(err, documents){
if(documents.length > 0){
	console.log(documents[0].name);
}
});