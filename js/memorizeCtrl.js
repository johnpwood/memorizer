angular.module('poetryApp').controller('memorizeCtrl', function($scope, poetryService){
  $scope.memorize = poetryService.memorize;
})
