
var app = angular.module("ImobHelp",['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/home', {
        templateUrl : 'pages/home.html',
        controller : 'HomeController'
    })

    // route for the Second page
    .when('/dashboard', {
        templateUrl : 'pages/dashboard.html',
        controller : 'DashboardController'
    })
    
    // route for the Second page
    .when('/shoppingCartItems', {
        templateUrl : 'pages/shoppingCartItems.html',
        controller : 'ShoppingCartItemsController'
    })

    .otherwise({redirectTo : 'home'})


});

