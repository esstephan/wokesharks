angular.module('wokeshark',
  ['wokeshark.pageView',
  'wokeshark.linkClick',
  'wokeshark.factory',
  'wokesharks.linkClickPlotly',
  'wokeshark.pageViewPlotly',
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
    .when('/overall', {
      templateUrl: 'app/overall/overall.html',
      controller: 'linkClickVisualsController'
    })
    .otherwise({
      redirectTo: '/'
    })
  })

$('body').append(
'<a href="http://hackreactor.com"> \
<img style="position: fixed; top: 0; right: 0; border: 0;" \
src="http://i.imgur.com/x86kKmF.png" \
alt="Built at Hack Reactor"> \
</a>'
);