app.service('ShoppingCart', function() {

var nrItems = 0;
return {
	
	increaseCartItemsNr : function() {
		nrItems ++;
		console.log("nrItems"+nrItems);
	}

}
})