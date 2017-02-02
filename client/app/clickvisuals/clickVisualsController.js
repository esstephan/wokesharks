var app = angular.module('wokesharks.plotly', [])

.controller('clickVisualsController', function ($scope, Links) {

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

.directive('linePlot', function () {

    // Create a link function
    function linkFunc(scope, element, attrs) {
        scope.$watch('data', function (plots) {
            var layout = {
                'width': 500,
                'height': 300,
                'pad':'0',
                'margin': { 't': 0, 'b':20, 'l':40, 'r':0 },
            };

            Plotly.newPlot(element[0], plots, layout);
        }, true);
    }

    // Return this function for linking ...
    return {
        link: linkFunc
    };
});


