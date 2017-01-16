/* используем localhost для тестирования */
var ws = new WebSocket("ws://localhost:591");

tinyMCE.init(
{
	selector: "div",
	plugins: ["fullscreen"],
	setup: function(editor)
	{
		editor.on("init", function()
		{
			setTimeout(function()
			{
				/* разворачиваем на весь экран после инициализации */
				editor.execCommand("mceFillScreen");
			}, 0);
		});
		
		/* обработчик входящего сообщения */
		ws.onmessage = function(message) {
			/* убераем фокус с активного элемента, так как курсор в любом случае перемистится в начало поля ввода */
			document.activeElement.blur();
			/* загружаем полученный документ */
			editor.setContent(message.data);
		};
		
		function sendDocument() {
			/* посылаем документ на сервер */
			ws.send(editor.getContent());
		}
		\
		/* при любых изменениях вызываем sendDocument */
		editor.on("keyup", sendDocument);
		editor.on("change", sendDocument);
		
	}
});