angular.module("linkClickController", [])
.controller("linkClick", ["$scope", "$http", function($scope, $http) {
  $scope.getLinks = function(page) {
    $http.get('/api/links/:page.id')
    .then(function (data) {
      $scope.count = data.count;
    })
  }
}])
