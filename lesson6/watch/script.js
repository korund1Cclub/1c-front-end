var vm = new Vue({
	el: "#app",
	data: {
		firstString: "",
		secondString: "",
		changesCount: 0
	},
	watch: {
		firstString: function(newValue){
			console.log("firstString:" + newValue);
			this.changesCount +=1;
		},
		secondString: function(newValue){
			console.log("secondString:" + newValue);
			this.changesCount +=1;
		}
	}

});

/*vm.$watch(['secondString','firstString'], function(newValue){
	console.log(newValue);
	this.changesCount +=1;
});*/