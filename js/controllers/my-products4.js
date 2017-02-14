app.controller('Products4Controller', ['$scope', '$http', function($scope, $http){
$http.get('js/products4.json').then(function(products){
	$scope.myProducts = products.data;
	});
}]);