
var app = angular.module("ImobHelp",['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/home', {
        templateUrl : 'pages/home.html',
        controller : 'HomeController'
    })

    // route for the Second page
    .when('/login', {
        templateUrl : 'pages/login.html',
        controller : 'SecondPageController'
    })
    
    // route for the Second page
    .when('/dashboard', {
        templateUrl : 'pages/dashboard.html',
        controller : 'AccordionPageController'
    })

    .otherwise({redirectTo : 'home'})


});

