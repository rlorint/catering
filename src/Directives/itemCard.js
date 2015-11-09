app.directive('itemCard', ['ShoppingCart', function(ShoppingCart) {
	return {
		restrict : 'E',
		scope: {item: '='},
		templateUrl: 'src/Directives/itemCard.html',
		controller: function() {
			this.newOrder = function() {
				console.log("clicked");
				ShoppingCart.increaseCartItemsNr();
			}
		},
		controllerAs: "cardCtrl"
	};	

}]);