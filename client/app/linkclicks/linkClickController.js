angular.module("wokeshark.linkClick", [])
.controller("linkClickController", function($scope, $http) {

$scope.testprop = 4;
$scope.linkcounts ={};
//make request for a single link, this will be /products, /addToCart, or /checkout
  $scope.getLink = function(url) {
    $http({
    url: '/linkClick',
    method: "GET",
    params: {"url": url}
    })
    .then(function (data, err) {
      if (err){
        console.log('error', err)
      } else {
      $scope.testprop = 3;
      $scope.linkcounts[url] = {};
      $scope.linkcounts[url].count = 0;
      $scope.linkcounts[url].count = data.data.count;
      console.log("count of link clicks retrieved from server for ", url, " is ", $scope.linkcounts[url].count);
      $scope.linkcounts[url].url = url;
      $scope.linkcounts[url].dates = data.data.date;
      console.log("scope is ", $scope);
    }
  })
  };

//additional functionality: make request for all links at once

//additional (maybe not needed?) functionality: send new link
  // $scope.sendLink = function(link){
  //   console.log(link);
  //   var newLink =
  //   {url: link.url}
  //   date: Date.now()
  // }
  //   http.send('/linkClick', link)
  //   .then(function (data) {
  //     console.log("link sent")
  //   });
  // })

  $scope.getLink("Buy");
  $scope.getLink("Buyify");
  $scope.getLink("shooping_cart");
  $scope.getLink("Add To Cart");
  $scope.getLink("Products");


  });

