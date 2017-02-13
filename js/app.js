var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "views/landing.html"
	})
	.when("/products", {
		templateUrl : "views/products.html"
	})
	.when("/products2", {
		templateUrl : "views/products2.html"
	})
	.when("/products3", {
		templateUrl : "views/products3.html"
	})
	.when("/products4", {
		templateUrl : "views/products4.html"
	})
	.when("/about-us", {
		templateUrl : "views/about-us.html"
	});
});