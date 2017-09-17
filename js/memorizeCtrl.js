angular.module('poetryApp').controller('memorizeCtrl', function($scope, $stateParams, poetryService){
  $scope.newStep = +($stateParams.step) + 1;
  $scope.oldStep = +($stateParams.step) - 1;
  console.log($stateParams.step)
  $scope.memorize = poetryService.memorize[$stateParams.step];
  $scope.removed = function(x){
    return /\w_+/.test(x);
  }
  $scope.visibleStyle = {
    transition: 'color 0.2s, background-color 0.2s'
  }
  $scope.hiddenStyle = {
    color: 'rgba(1,1,1,0)',
    'background-color':'rgba(0,0,0,.5)',
    cursor:'pointer'
  }
})
