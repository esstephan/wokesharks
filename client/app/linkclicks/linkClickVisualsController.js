angular.module('wokesharks.linkClickPlotly', [])

.controller('linkClickVisualsController', function ($scope, Links) { // our bar graph controller

  var allUrls = []; // initialization block
  var allCounts = [];

  $scope.refresh = function() { // When refresh is called:
    Links.getAllLinks() // Get all the links
      .then(function(response) {
        response.data.forEach(function(item) { // For all items in response.data...
          allUrls.push(item.url); // Push the url and the count properties onto their relevant arrays.
          allCounts.push(item.count);
        })
        $scope.data = {x: allUrls, y: allCounts, type: 'bar'}; // Set our bar graph parameters within and object...
        $scope.data = [$scope.data]; // and store it-as Plotly requires-within an array.
      });
  };

  $scope.refresh(); 
})

.controller("linkClickPieController", function ($scope, Links) { // our pie graph controller

  var allUrls = []; // initialization block
  var allCounts = [];
  var percentage = [];
  var totalCount = 0;

  $scope.refresh = function() { // When refresh is called:
    Links.getAllLinks() // Get all the links
      .then(function(response) {
        response.data.forEach(function(item) { // For all the items in response.data...
          totalCount+=item.count; // Increment the total amount of clicks by the amount of times the current url has been clicked
          allUrls.push(item.url); // Push the url and count properties into their relevant arrays.
          allCounts.push(item.count);
        })
        allCounts.forEach(function(count) { // For each link...
          percentage.push(count/totalCount*100) // Get the percentage of how many times this link has been clicked over the total number of aggregate clicks.
        })
        $scope.data = {values: percentage, labels: allUrls, type: 'pie'}; // Set our pie graph
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



