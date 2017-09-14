angular.module('poetryApp').controller('readCtrl', function($scope, poetryService, $sce){
  $scope.test = "reader"
  $scope.poem = poetryService.poem
  if($scope.poem){
    $scope.text = $scope.poem.lines.join(" <br/> ")
    $scope.text = $sce.trustAsHtml($scope.text)
  }
})
