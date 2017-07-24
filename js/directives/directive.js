var app = angular.module('redditModule');

app.directive('redditPost', function() {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'partials/redditPost.html'
  }
});
