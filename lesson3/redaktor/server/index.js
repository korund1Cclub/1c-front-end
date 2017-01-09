var wss = require("ws").Server;

var server = new wss({ port: 591 });
var clients = new Set();
var document = "";

server.on("connection", function(socket) {
	clients.add(socket);
	socket.send(document);
	
	socket.on("message", function(data) {
		document = data;
		for(var editor of clients) {
			if(editor !== this) {
				editor.send(document);
			}
			
		}
	});
	socket.on("close", function() {
		clients.delete(socket);
	});
});