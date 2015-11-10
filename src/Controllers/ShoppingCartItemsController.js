app.controller('ShoppingCartItemsController', ['$scope', function($scope) {

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

}])