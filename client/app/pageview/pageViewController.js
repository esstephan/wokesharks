angular.module("wokeshark.pageView", [])

.controller("pageViewController", ["$scope", "$http", function($scope, $http) {

	// $scope.newPage = function(newData) {
	// 	$http.post('/pageView', newData).then(function (data) {
	// 		$scope.title = data.title
	// 		$scope.count = data.count;
	// 	})
	// }

	$scope.getPageViewData = function(page) {
		$http.get('/api/pages/:page.id').then(function (data) {
			$scope.views=data.count;
		})
	}
	$scope.getPageViewData(page);
}])
