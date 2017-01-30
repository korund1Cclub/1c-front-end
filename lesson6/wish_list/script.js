var vm = new Vue({
	el: "#app",
	data: {
		list: ["Make smth"],
		thing: ""
	},
	methods: {
		addItem: function(event){
			
				this.list.push(this.thing);
				this.thing = "";
			
		},
		removeItem: function(index){
			this.list.splice(index, 1);
		}
	}

});