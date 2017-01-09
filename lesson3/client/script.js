/* ЧАТИК */
var field = document.getElementById("field"), 
	chat = document.getElementById("chat");

/* подключаемся к серверу */
var ws = new WebSocket("ws://localhost:591/");

/* обработчик входящего сообщения */
ws.onmessage = function(message){
	/* добавляем сообщение в начало */
	chat.value = message.data + "\n" + chat.value;
};

/* обработчик открытия соединения */
ws.onopen = function() {
	field.addEventListener("keydown", function(event){
		if(event.which == 13){
			/* отправляем сообщение */
			ws.send(field.value);
			/* очищаем текстовое поле */
			field.value = "";
		}
	});
};



