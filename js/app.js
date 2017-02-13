var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "views/landing.html"
	})
	.when("/products", {
		templateUrl : "views/products.html",
		controller: "my-products1"
	})
	.when("/products2", {
		templateUrl : "views/products2.html",
		controller: 'my-products2'
	})
	.when("/products3", {
		templateUrl : "views/products3.html",
		controller: "my-products3"
	})
	.when("/products4", {
		templateUrl : "views/products4.html",
		controller: "my-products4"
	})
	.when("/about-us", {
		templateUrl : "views/about-us.html"
	});
});