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

angular.module('wokesharks.linkClickPlotly', [])

.controller('pageViewVisualController', function ($scope, Pages) {
  var allTitles = [];
  var allCounts = [];

  $scope.refresh = function () {
    Pages.getAllPages().then(function (res) {
      res.data.forEach(function (element) {
        allPages.push(element.title);
        allCounts.push(element.count);
      })
      $scope.data = {x: allTitles, y: allCounts, type: 'bar'};
      $scope.data = [$scope.data];
    })
  };

  $scope.refresh();
})


.controller('pageViewPieController', function($scope, Pages) {
  var allTitles = []; // initialization
  var allCounts = [];
  var percentage = [];
  var totalCount = 0;
  
  $scope.refresh = function() {
    Pages.getAllPages().then(function (res) {
      res.data.forEach(function (element) {
        totalCount+=element.count;
        allTitles.push(element.url);
        allCounts.push(element.count);
      })
      allCounts.forEach(function (count) {
        percentage.push(count/totalCount*100);
      });
      $scope.data = {values: percentage, labels: allTitles, type: 'pie'};
      $scope.data = [$scope.data];
    })
  };

  $scope.refresh();
})

.controller('linkClickDayController', function($scope, Pages) {
  var allTitles = [];
  var allDates = [];
  var everyDay = [];
  var dates = {};

  $scope.refresh = function() {
    Pages.getAllPages().then(function(res) {
      res.data.forEach(function (element) {
        element.data.forEach(function (specificElement) {
          allDates.push(specificElement);
        })
    })
    allDates.forEach(function (day) {
      var day = day.slice(4, 10);
      dates[day] ? dates[day]++ : 1; // if dates[day] exists, increment it, if not, initialize it to 1
    })
    var days = Object.keys(dates); // get the days
    for (var key in dates) {
      everyDay.push(dates[key]); // push each individual date onto everyDays
    }
    $scope.data = {x: day, y: everyDay, type: 'scatter'};
    $scope.data = [$scope.data];
  });
  }
})

.directive('pagePlot', function () {
  // Create page function
  function pageFunc(scope, element, attrs) {
    scope.$watch('data', function (plots) {
      var layout: {
        width: 600,
        height: 300,
        margin: {'t': 40, 'b': 20, 'l': 40, 'r': 0}
      };
      // new plot generated
      Plotly.newPlot(element[0], plots, layout);
    }, true);
  }


return {
  page: pagefunc
};

});
