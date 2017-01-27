angular.module("pageViewController", [])
.controller("pageView", ["$scope", "$http", function($scope, $http) {

	$scope.newPage = function(newData) {
		$http.post('/pageView', newData).then(function (data) {
			$scope.title = data.title
			$scope.count = data.count;
		})
	}

	$scope.getNumberOfViews = function(id) {
		$http.get('/pageView' + id).then(function (data) {
			return data.count;
		})
	}
}])
