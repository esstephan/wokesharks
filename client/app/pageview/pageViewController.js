angular.module("wokeshark.pageView", [])
.controller("pageViewController", function($scope, $http) {
	$scope.getPage = function(page) {
		$http.get('/pageView' + page).then(function (data) {
			$scope[page].title = data.title;
			$scope[page].count = data.count;
			$scope[page].date = data.date;
		})
	})
    $scope.getPage('/');
	$scope.getPage('/products');
    $scope.getPage('/checkout');

	$scope.sendPage = $http.post('/pageView', function(page) {
		var newPage = {
			title: page.title,
			date: Date.now()
		}
		$http.post('/pageView', page).then(function (data) {
			console.log("page sent");
		})
	})

	$scope.sendPage('/');
	$scope.sendPage('/products');
    $scope.sendPage('/checkout');
})
