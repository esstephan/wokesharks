angular.module('wokeshark.pageViewPlotly', [])

.controller('pageViewVisualsController', function($scope, Pages) {
	var allTitles = [];
	var allCounts = [];

	$scope.refresh = function() {
		Pages.getAllPages().then(function (res) {
			res.data.forEach(function (element) {
				allTitles.push(element.title);
				allCounts.push(element.count)
			})
			$scope.data = [{
				name: "Page View",
				x: allTitles,
				y: allCounts,
				type: 'bar'
			}];
		})
	};
	$scope.refresh();
})

.controller("pageViewPieController", function ($scope, Pages) {

  var allTitles = [];
  var allCounts = [];
  var percentage = [];
  var totalCount = 0;

  $scope.refresh = function() {
    Pages.getAllPages()
      .then(function(response) {
        response.data.forEach(function(item) {
          totalCount+=item.count;
          allTitles.push(item.title);
          allCounts.push(item.count);
        })
        allCounts.forEach(function(count) {
          percentage.push(count/totalCount*100)
        })
        $scope.data = {values: percentage, labels: allTitles, type: 'pie'};
        $scope.data = [$scope.data];
      });
  };

  $scope.refresh();

})

