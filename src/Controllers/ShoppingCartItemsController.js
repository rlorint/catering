app.controller('ShoppingCartItemsController', ['$scope','$location','ShoppingCart','$route', function($scope,$location,ShoppingCart,$route) {

    $scope.orders = ShoppingCart.getOrders();
    console.log("orders"+$scope.orders);
	$scope.orderedItems = [

    {
        name: 'Chec',
        description: 'Chec de casa facut cu faina si oua de casa, unt si gem de visine',
        price: '12 RON',
        photo: 'photos/chec.jpg'
    },
    {
        name: 'Salata Caesar cu creveti',
        description: 'Salta Caesar cu creveti, masline, rosii, salata verde si sos alb',
        price: '13 RON',
        photo: 'photos/caesar.jpg'
    }];

    $scope.submitForm = function() {
        console.log($scope.client);
    }

    $scope.go = function(path) {
        console.log("pat"+path);
        $location.path(path);
        
        //$window.location.href = '/offers';
    };
}])