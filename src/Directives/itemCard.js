app.directive('itemCard', ['ShoppingCart', function(ShoppingCart) {
	return {
		restrict : 'E',
		scope: {item: '='},
		templateUrl: 'src/Directives/itemCard.html',
		controller: function() {
			this.newOrder = function(name,photo,price,description) {
				console.log("got new order");
				ShoppingCart.increaseCartItemsNr();
				ShoppingCart.addOrder(name,photo,price,description);
			}
		},
		controllerAs: "cardCtrl"
	};	

}]);