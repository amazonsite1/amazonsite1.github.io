var app = angular.module("myApp", ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "views/landing.html"
	})
	.when("/products", {
		templateUrl : "views/products.html",
		controller: "Products1Controller"
	})
	.when("/products2", {
		templateUrl : "views/products2.html",
		controller: "Products2Controller"
	})
	.when("/products3", {
		templateUrl : "views/products3.html",
		controller: "Products3Controller"
	})
	.when("/products4", {
		templateUrl : "views/products4.html",
		controller: "Products4Controller"
	})
	.when("/about-us", {
		templateUrl : "views/about-us.html"
	});
});