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

.directive('linePlot', function() {
	function pageFunc(scope, element, attributes) {
		scope.$watch('data', function (plots) {
			var layout = {
				title: 'Page View',
				yaxis: {
					title: 'Count',
					titlefront: 'Arial'
				},
				width: 600,
				height: 300, 
				margin: {'t': 40, 'b': 20, 'l': 40, 'r': 0}
			};

			Plotly.newPlot(element[0], plots, layout)
		}, true)
	}

	return {
		page: pageFunc
	};
})

