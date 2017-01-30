Vue.filter("fixNumber", function (x) {
	return parseFloat(x.toFixed(3));
});

var vm = new Vue({
	el: "#app",
	data: {
		b: 0,
		c: 0
	},
	computed: {
		D: function () {
			return this.b * this.b - 4 * this.c;
		}
	}
});

function makePlot(vI) {
	functionPlot({
		target: "#plot",
		data: [{
			fn: "x^2 + (" + vI.b + ") * x + (" + vI.c + ")"
		}],
		width: 475,
		grid: true
	});
}


vm.$watch("b", function (newValue) {
	makePlot(this);
});
vm.$watch("c", function (newValue) {
	makePlot(this);
});
makePlot(vm);