var app = angular.module('redditModule');

app.controller('outputCtrl', function($scope, redditFactory) {
  $scope.posts = redditFactory.returnResults();
});
