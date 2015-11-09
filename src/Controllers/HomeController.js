/**
 * Created by User on 9/21/2015.
 */
app.controller ('HomeController', ['$scope','ShoppingCart', function($scope,ShoppingCart){

$scope.items = [

    {
        category : 1,
        name: 'Salata Bio',
        price: '12 RON',
        photo: 'photos/salata_bio.jpg'
    },
    {
        category : 1,
        name: 'Salata Caesar cu creveti',
        price: '13 RON',
        photo: 'photos/caesar.jpg'
    },
    {
        category : 1,
        name: 'Salata orientala',
        price: '12 RON',
        photo: 'photos/salata_orientala.jpg'
    },
    {
        category : 2,
        name: 'Naut',
        price: '12 RON',
        photo: 'photos/naut.jpg'
    },
    {
        category : 2,
        name: 'Naut',
        price: '12 RON',
        photo: 'photos/naut.jpg'
    },
    {
        category : 2,
        name: 'Legume la gratar',
        price: '13 RON',
        photo: 'photos/legume.jpg'
    },
    {
        category : 2,
        name: 'Tocanita de fasole',
        price: '12 RON',
        photo: 'photos/fasole.jpg'
    },
    {
        category : 2,
        name: 'Orez cu soia2',
        price: '13 RON',
        photo: 'photos/orez.png'
    },
    {
        category : 3,
        name: 'Orez cu soia',
        price: '13 RON',
        photo: 'photos/orez.png'
    },
    {
        category : 3,
        name: 'Tocanita de fasole2',
        price: '12 RON',
        photo: 'photos/fasole.jpg'
    },
    {
        category : 4,
        name: 'Orez cu lapte',
        price: '6 RON',
        photo: 'photos/orez_lapte.jpg'
    },
    {
        category : 4,
        name: 'Chec cu visine',
        price: '9 RON',
        photo: 'photos/chec.jpg'
    }
];
    $scope.clicked = function(){
        console.log("dffdsf");
        $scope.showOverlay = true;
        console.log($scope.showOverlay);
    }

   
    $scope.activeFlag = false;

   // $scope.calculatedHeight = 
}]);