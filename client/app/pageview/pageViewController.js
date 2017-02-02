angular.module("wokeshark.pageView", [])
.controller("pageViewController", function($scope, Pages) {


$scope.pageProperties = {};
$scope.showAll = true;
$scope.hideAll = false;

$scope.setShowAll = function(boolean) {
  $scope.showAll = boolean;
  $scope.hideAll = !boolean;
}

$scope.showDates = true;
$scope.hideDates = false;

$scope.setHideDates = function(boolean) {
    $scope.hideDates = boolean;
    $scope.showDates = !boolean;
}

$scope.getPage = function(page) {
    Pages.getPage(page).then(function (res, err) {
      if (err) {
  		console.log("ERROR IN getPages METHOD OF PAGE VIEW CONTROLLER");
  		return;
  	}
  	  var ourData = res.data;
      $scope.pageProperties[page] = {};
      $scope.pageProperties[page].count = 0;
      $scope.pageProperties[page].title = ourData.title;
      $scope.pageProperties[page].count = ourData.count;
      $scope.pageProperties[page].date = ourData.date;
  })
  };

var allViews = 0;
$scope.getAllPages = function () {
  Pages.getAllPages().then(function (res, err) {
  	if (err) {
  		console.log("ERROR IN getAllPages METHOD OF PAGE VIEW CONTROLLER");
  		return;
  	}
  	$scope.ourPages = res.data;
  	res.data.forEach(function (element) {
      console.log(element.count)
      allViews+=element.count;
      $scope.views = allViews;
  		$scope.getPage(element.title);
  	})
  })
}

$scope.getAllPages();

})
