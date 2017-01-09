



/* ******** WEB_SOCKET *********** */

var wss = require("ws").Server;
/* Создаем новый WebSocket-сервер */
var server = new wss({ port: 591 });
/* Создаем множество подключенных клиентов */
var clients = new Set();

/* Обработчик нового соединения */
server.on("connection", function(socket) {
	/* Добавляем клиента к множеству */
	clients.add(socket);
	/* обработчик входящего сообщения */
	socket.on("message", function(message){
		/* для каждого клиента из множества */
		for (var interlocutor of clients) {
			/* пересылаем сообщение */
			interlocutor.send(message);
		}
	});
	
	/* обработчик закрытия соединения */
	socket.on("close", function() {
		/* удаляем клиента из множества */
		clients.delete(socket);
	});
	
});

