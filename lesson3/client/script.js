var button = document.getElementById("request");
button.addEventListener("click", function(){
	/*Создаем объект запроса*/
	var xhr = new XMLHttpRequest();
	/*Конфигурируем запрос*/
	xhr.open("GET", "http://localhost:591/", true);
	/*обработчик изменения состояния запроса*/
	xhr.onreadystatechange = function(){ 
		/*если запрос в состояние DONE*/
		if(this.readyState == this.DONE){
			/*если сервер вернул ошибку*/
			if(this.status != 200){
				console.log("Ошибка: " + this.status);
			}
			else{
				console.log(this.responseText);
			}
		}
	};
	/*посылаем запрос*/
	xhr.send();
	
});