var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "../views/landing.htm"
	})
	.when("/products", {
		templateUrl: "../views/products-home.htm"
	})
	.when("/about-us", {
		templateUrl: "../views/about-us.htm"
	});
});