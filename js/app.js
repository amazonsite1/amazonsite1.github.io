var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "views/landing.html"
	})
	.when("/products", {
		templateUrl : "views/products.html"
	})
	.when("/products", {
		templateUrl : "views/products2.html"
	})
	.when("/products", {
		templateUrl : "views/products3.html"
	})
	.when("/products", {
		templateUrl : "views/products4.html"
	})
	.when("/about-us", {
		templateUrl : "views/about-us.html"
	});
});