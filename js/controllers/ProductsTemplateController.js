app.controller('ProductsTemplateController', ['$scope', '$http', function($scope, $http){
	$scope.view = 1;
	$http.get('js/product-titles.json').then(function(titles){
	$scope.productTitles = titles.data;
	console.log($scope.productTitles);
	});
	$scope.prodView = function(view){
		console.log(view);
		$scope.view = view+1;
	};
}]);