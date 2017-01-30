angular.module("wokeshark.pageView", [])
.controller("pageViewController", function($scope, $http) {
	$scope.getPage('/pageView', function(page) {
		$http.get('/pageView').then(function (data) {
			$scope.count = data.count;
		})
	})

	$scope.sendPage('/pageView', function(page) {
		var newPage = {
			title: page.title,
			date: Date.now();
		}
		$http.post('/pageView', page).then(function (data) {
			console.log("page sent");
		})
	})
})