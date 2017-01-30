angular.module("wokeshark.linkClick", [])
.controller("linkClickController", function($scope, $http) {
  $scope.getLinks = function(page) {
    $http.get('/linkClick')
    .then(function (data) {
      $scope.count = data.count;
    })
  }
  $scope.sendLink = function(link){
    console.log(link);
    var newLink =
    {url: link.url
    date: Date.now()}
  
    $http.send('/linkClick', link)
    .then(function (data) {
      console.log("link sent")
    })
  }
})
  //$scope.getLinks("hello");
