angular.module("wokeshark.pageView", [])
.controller("pageViewController", function($scope, $http) {
	$scope.getPage('/pageView', function(page) {
		$http.get('/pageView' + page).then(function (data) {
			$scope[page].title = data.title;
			$scope[page].count = data.count;
			$scope[page].date = data.date;
		})
	})
    $scope.getLink(/);
	$scope.getLink(/products);
    $scope.getLink(/checkout);

	$scope.sendPage('/pageView', function(page) {
		var newPage = {
			title: page.title,
			date: Date.now()
		}
		$http.post('/pageView', page).then(function (data) {
			console.log("page sent");
		})
	})
})