var app = angular.module('redditModule');

app.directive('redditPost', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/redditPost.html'
  }
});
