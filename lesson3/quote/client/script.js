var quoteBlock = document.getElementById("quote");
var request = $.get("http://localhost:591/quote");
request.done(function(data) {
	var quote = JSON.parse(data);
	document.title = "Цитата #" + quote.number;
	quoteBlock.innerHTML = quote.text;
	quoteBlock.style.display = "block";
});