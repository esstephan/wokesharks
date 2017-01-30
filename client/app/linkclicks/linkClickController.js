angular.module("wokeshark.linkClick", [])
.controller("linkClickController", function($scope, $http) {

//make request for a single link, this will be /products, /addToCart, or /checkout
  $scope.getLink = function(url) {
    $http.get('/linkClick'+ url)
    .then(function (data) {
      $scope[url].count = data.count;
      console.log("count of link clicks retrieved from server for ", url, " is ", $scope[url].count);
      $scope[url].url = data.url;
      $scope[url].dates = data.date;
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

  $scope.getLink(/products);
  $scope.getLink(/addToCart);
  $scope.getLink(/checkout);

  });

