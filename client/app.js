angular.module('wokeshark',
  ['wokeshark.pageView',
  'wokeshark.linkClick',
  'ngRoute'])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/pageView', {
      templateUrl: 'app/pageview/pageView.html',
      controller: 'pageViewController'
    })
    .when('/linkClick', {
      templateUrl: 'app/linkclicks/linkClick.html',
      controller: 'linkClickController'
    })
    .otherwise({
      redirectTo: '/'
    })
  })