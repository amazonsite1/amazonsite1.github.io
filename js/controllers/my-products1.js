app.controller('Products1Controller', ['$scope', '$http', function($scope, $http){
	$http.get('js/products1.json').then(function(products){
	$scope.myProducts = products.data;
	});
}]);