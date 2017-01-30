var vm = new Vue({
	el: "#app",
	data: {
		numbers: ["3", "4"]
	},
	
	computed: {
		average: function(){
			var sum = 0, 
				n = this.numbers.length, 
				i;
			for(i = 0; i < n; ++i){
				sum += Number(this.numbers[i]);
			}
			return sum / n;
			
		}
	}

});