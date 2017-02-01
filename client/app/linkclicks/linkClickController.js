angular.module("wokeshark.linkClick", [])
.controller("linkClickController", function($scope, $http) {

$scope.linkcounts ={};

var allLinks = [];
//additional functionality: make request for all links at once
  $scope.getAllLinks = function (url) {
    $http({
    url: '/linkClick',
    method: "GET"
    })
    .then (function (response, err) {
      if (err) {
        console.log('error', err)
      } else {
        for (link in response.data){
          allLinks.push(link);
        }
      }
    })
  }

console.log('allLinks', allLinks);
//call getLink on each one of the urls in allLinks

//make request for a single link, this will be /products, /addToCart, or /checkout
  $scope.getLink = function(url) {
    $http({
    url: '/linkClick',
    method: "GET",
    params: {"url": url}
    })
    .then(function (response, err) {
      if (err) {
        console.log('error', err)
      } else {
      $scope.linkcounts[url] = {};
      $scope.linkcounts[url].count = 0;
      $scope.linkcounts[url].count = response.data.count;
      console.log("count of link clicks retrieved from server for ", url, " is ", $scope.linkcounts[url].count);
      $scope.linkcounts[url].url = url;
      $scope.linkcounts[url].dates = response.data.date;
      console.log("scope is ", $scope);
    }
  })
  };




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
  $scope.getLink("shopping_cart");
  $scope.getLink("Add To Cart");
  $scope.getLink("Products");

  $scope.getLink("penguins");
  $scope.getLink("addToCart");
  $scope.getLink("checkout");

  });

