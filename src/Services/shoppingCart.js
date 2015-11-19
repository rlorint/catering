app.service('ShoppingCart', function() {

var orders = [];
var nrItems = 0;
return {

	getCount : function() {
		return nrItems;
	},
	
	increaseCartItemsNr : function() {
		nrItems ++;
	},

	addOrder: function(name,photo,price,description) {
		console.log("Adding new order");
		orders.push({name: name, photo:photo, price:price, description:description});
		console.log(orders);
	},

	getOrders: function() {
		return orders;
	},

	emptyCart: function() {
		nrItems = 0;
		orders = [];
	}
};
})