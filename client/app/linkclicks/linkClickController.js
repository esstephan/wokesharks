angular.module("wokeshark.linkClick", [])
.controller("linkClickController", function($scope, Links) {

$scope.linkcounts = {};
var allLinks = [];

//make request for all links at once
  $scope.getAllLinks = function () {
    Links.getAllLinks()
    .then (function (response, err) {
      if (err) {
        console.log('error', err)
      } else {
        $scope.allData = response.data;
        response.data.forEach(function(item) {
          $scope.getLink(item.url);
        })
      }
    });
  };

$scope.getAllLinks();

//call getLink on each one of the urls in allLinks
//make request for a single link, this will be /products, /addToCart, or /checkout
  $scope.getLink = function(url) {
    Links.getLink(url)
    .then(function (response, err) {
      if (err) {
        console.log('error', err)
      } else {
        //console.log("response", response.data)
        $scope.linkcounts[url] = {};
        $scope.linkcounts[url].count = 0;
        $scope.linkcounts[url].count = response.data.count;
        //console.log("count of link clicks retrieved from server for ", url, " is ", $scope.linkcounts[url].count);
        $scope.linkcounts[url].url = url;
        $scope.linkcounts[url].dates = response.data.date;
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

  // $scope.getLink("Buy");
  // $scope.getLink("Buyify");
  // $scope.getLink("shopping_cart");
  // $scope.getLink("Add To Cart");
  // $scope.getLink("Products");

  // $scope.getLink("penguins");
  // $scope.getLink("addToCart");
  // $scope.getLink("checkout");

});





