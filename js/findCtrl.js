angular.module('poetryApp').controller('findCtrl', function($scope, poetryService){
  $scope.results = poetryService.results;
  $scope.search = function(){
    poetryService.search($scope.author, $scope.title, $scope.text).then(function(response){
      $scope.results = poetryService.results;
    })
  }
  $scope.select = function(n){
    poetryService.select(n);
  }
})
