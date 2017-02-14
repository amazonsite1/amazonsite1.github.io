app.controller('ProductsTemplateController', ['$scope', '$http', function($scope, $http){
	$scope.view = "one";

	$scope.prodView = function(view){
		$scope.view = view;
	};
}]);