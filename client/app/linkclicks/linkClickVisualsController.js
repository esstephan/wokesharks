angular.module('wokesharks.linkClickPlotly', [])

.controller('linkClickVisualsController', function ($scope, Links) {

  var allUrls = [];
  var allCounts = [];

  $scope.refresh = function() {
    Links.getAllLinks()
      .then(function(response) {
        response.data.forEach(function(item) {
          allUrls.push(item.url);
          allCounts.push(item.count);
        })
        $scope.data = {x: allUrls, y: allCounts, type: 'bar'};
        $scope.data = [$scope.data];
      });
  };

  $scope.refresh();
})

.controller("linkClickPieController", function ($scope, Links) {

  var allUrls = [];
  var allCounts = [];
  var percentage = [];
  var totalCount = 0;

  $scope.refresh = function() {
    Links.getAllLinks()
      .then(function(response) {
        response.data.forEach(function(item) {
          totalCount+=item.count;
          allUrls.push(item.url);
          allCounts.push(item.count);
        })
        allCounts.forEach(function(count) {
          percentage.push(count/totalCount*100)
        })
        $scope.data = {values: percentage, labels: allUrls, type: 'pie'};
        $scope.data = [$scope.data];
      });
  };



  $scope.refresh();

})

.controller("linkClickDayController", function ($scope, Links) {

  var allUrls = [];
  var allDates = [];
  var everyDay = [];
  var dates = {};

  $scope.refresh = function() {
    Links.getAllLinks()
      .then(function(response) {
        response.data.forEach(function(item) {
          item.date.forEach(function(element) {
            allDates.push(element);
          })
        })
        allDates.forEach(function(day) {
          var day = day.slice(4,10);
          if(dates[day]) {
            dates[day] = dates[day] + 1;
          } else {
            dates[day] = 1;
          }
        })
        var days = Object.keys(dates);
        for (var key in dates) {
          everyDay.push(dates[key]);
        }
        $scope.data = {x: days, y: everyDay, type: 'scatter'};
        $scope.data = [$scope.data];
      });
  };

  $scope.refresh();

})

// .controller('linkClickLineController', function ($scope, Links) {

//   var allUrls = [];
//   var allCounts = [];

//   $scope.refresh = function() {
//     Links.getAllLinks()
//     .then(function(response) {
//       response.data.forEach(function(item) {
//         allUrls.push(item.url);
//         allCounts.push(item.count);
//       })
//       allCounts.sort();
//       $scope.data = {x: allUrls, y: allCounts, type: 'line'};
//       $scope.data = [$scope.data];
//     });
//   }

//   $scope.refresh();
// })

.directive('linePlot', function () {
  // Create a link function
  function linkFunc(scope, element, attrs) {
      scope.$watch('data', function (plots) {
        var layout = {
          width: 600,
          height: 300,
          margin: { 't': 40, 'b':20, 'l':40, 'r':0 },
        };

      Plotly.newPlot(element[0], plots, layout);
    }, true);
  }

  // Return this function for linking ...
  return {
      link: linkFunc
  };

})

.directive('overallPlot', function () {
  // Create a link function
  function linkFunc(scope, element, attrs) {
      scope.$watch('data', function (plots) {
        var layout = {
          width: 400,
          height: 200,
          margin: { 't': 40, 'b':20, 'l':40, 'r':0 },
        };

      Plotly.newPlot(element[0], plots, layout);
    }, true);
  }

  // Return this function for linking ...
  return {
      link: linkFunc
  };

})



