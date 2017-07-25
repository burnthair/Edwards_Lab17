var app = angular.module('redditModule');

app.factory('redditFactory', function($http) {

  var posts = [];

  return {
    gatherJSON: gatherJSON,
    returnResults: returnResults
  }

  function gatherJSON(sub) {
    var promise = $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/' + sub + '/.json?limit=10'
    }).then(function successfulCallback(response) {
      posts = response.data.data.children;
      console.log(posts);
      return posts;
    });
    return promise;
  };

  function returnResults() {
    return posts;
  }

});
