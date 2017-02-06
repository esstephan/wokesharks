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

.controller('pageViewDayController', function($scope, Pages) {

  var allTitles = [];
  var allDates = [];
  var everyDay = [];
  var dates = {};

  $scope.refresh = function() {
    Pages.getAllPages().then(function(res) {
      res.data.forEach(function (element) {
        element.date.forEach(function (specificElement) {
          allDates.push(specificElement);
        })
    })
    allDates.forEach(function (day) {
      var day = day.slice(4, 10);
      if(dates[day]) {
        dates[day] = dates[day] + 1;
      } else {
        dates[day] = 1; // if dates[day] exists, increment it, if not, initialize it to 1
      }
    })
    var days = Object.keys(dates); // get the days
    for (var key in dates) {
      everyDay.push(dates[key]); // push each individual date onto everyDays
    }
    $scope.data = {x: days, y: everyDay, type: 'scatter'};
    $scope.data = [$scope.data];
  });

  };

  $scope.refresh();

})




