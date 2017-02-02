angular.module('wokeshark',
  ['wokeshark.pageView',
  'wokeshark.linkClick',
  'wokeshark.factory',
  'wokesharks.plotly',
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
    .when('/pageViewAll', {
      templateUrl: 'app/pageview/pageView.html',
      controller: 'pageViewController'
    })
    .when('/linkClickAll', {
      templateUrl: 'app/linkclicks/linkClick.html',
      controller: 'linkClickController'
    })
    .when('/pageViewVisual', {
      templateUrl: 'app/pageview/pageView.html',
      controller: 'pageVisual'
    })
    .when('/linkViewVisual', {
      templateUrl: 'app/linkclicks/linkClick.html',
      controller: 'linkVisual'
    })
    .otherwise({
      redirectTo: '/'
    })
  })
