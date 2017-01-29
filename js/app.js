var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "views/landing.html"
	})
	.when("/products", {
		templateUrl : "views/products.html"
	})
	.when("/about-us", {
		templateUrl : "views/about-us.html"
	});
});