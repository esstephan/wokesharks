angular.module("wokeshark.pageView", [])
.controller("pageViewController", function($scope, $http) {

  $scope.pageProperties ={};
//make request for a single link, this will be /products, /addToCart, or /checkout
  $scope.getPage = function(page) {
    $http({
    page: '/pageView',
    method: "GET",
    params: {"title": title}
    })
    .then(function (data, err) {
      if (err){
        console.log('error', err)
      } else {
      var ourData = data.data;
      $scope.pageProperties[page] = {};
      $scope.pageCount[page].title = ourData.title;
      $scope.pageCount[page].count = ourData.count;
      $scope.pageCount[page].dates = ourData.date;
    }
  })
  };




  $scope.getPage('/');
	$scope.getPage('/products');
  $scope.getPage('/checkout');


/*
	$scope.sendPage = $http.post('/pageView', function(page) {
		var newPage = {
			title: page.title,
			date: Date.now()
		}
		$http.post('/pageView', page).then(function (data) {
			console.log("page sent");
		})
	})

	$scope.sendPage('/');
	$scope.sendPage('/products');
    $scope.sendPage('/checkout');
    */
})
