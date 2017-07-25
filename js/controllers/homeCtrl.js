var app = angular.module('redditModule');

app.controller('homeCtrl', function($scope, $location, redditFactory) {
  $scope.passSubreddit = function (sub) {
    var subName = sub;
    redditFactory.gatherJSON(subName).then(function () {
      $location.path('/output')});
  };
});
