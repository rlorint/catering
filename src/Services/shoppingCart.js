app.service('ShoppingCart', function() {

var nrItems = 0;
return {

	getCount : function() {
		return nrItems;
	},
	
	increaseCartItemsNr : function() {
		nrItems ++;
	}
};
})