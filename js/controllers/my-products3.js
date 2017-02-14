app.controller('Products3Controller', ['$scope', '$http', function($scope, $http){
$http.get('js/products3.json').then(function(products){
	$scope.myProducts = products.data;
	});
}]);