app.directive('orderedItem', function() {
	return {
		restrict : 'E',
		scope: {item: '='},
		templateUrl : 'src/Directives/orderedItem.html', 
		controller: function() {

		},
		controllerAs: "itemCtrl"
	};


});