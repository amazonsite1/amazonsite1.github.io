app.controller('Products2Controller', ['$scope', '$http', function($scope, $http){
	$http.get('js/products2.json').then(function(products){
	$scope.myProducts = products.data;
	});
}]);