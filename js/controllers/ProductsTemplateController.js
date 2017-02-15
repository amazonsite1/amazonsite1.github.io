app.controller('ProductsTemplateController', ['$scope', '$http', function($scope, $http){
	$scope.view = "one";
	$http.get('js/product-titles.json').then(function(titles){
	$scope.productTitles = titles.data;
	});
	$scope.prodView = function(view){
		$scope.view = view;
	};
}]);