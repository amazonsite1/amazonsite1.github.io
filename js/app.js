var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/products", {
		templateUrl: "../views/products-home.html"
	})
	.when("/about-us", {
		templateUrl: "../views/about-us.html"
	})
	.otherwise({
		templateUrl: "../views/landing.html"
	});
});