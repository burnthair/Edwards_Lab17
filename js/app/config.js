var app = angular.module('redditModule');

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      controller: 'homeCtrl',
      templateUrl: 'partials/home.html'
    })
    .when('/output', {
      controller: 'outputCtrl',
      templateUrl: 'partials/output.html'
    })
    .otherwise({ redirectTo: '/home' })
})
  
