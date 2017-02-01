angular.module("wokeshark.pageView", [])
.controller("pageViewController", function($scope, Pages) {


$scope.pageProperties = {};
var allPages = [];

$scope.getPage = function(page) {
    Pages.getPage(page).then(function (res, err) {
      if (err) {
  		console.log("ERROR IN getPages METHOD OF PAGE VIEW CONTROLLER");
  		return;
  	}
  	  var ourData = res.data;
      $scope.pageProperties[page] = {};
      $scope.pageProperties[page].title = ourData.title;
      $scope.pageProperties[page].count = ourData.count;
      $scope.pageProperties[page].date = ourData.date;
  })
  };

$scope.getAllPages = function () {
  Pages.getAllPages().then(function (res, err) {
  	if (err) {
  		console.log("ERROR IN getAllPages METHOD OF PAGE VIEW CONTROLLER");
  		return;
  	}
  	$scope.ourPages = res.data;
  	res.data.forEach(function (element) {
  		$scope.getPage(element.title);
  	})
  })
}

$scope.getAllPages();
  
})
