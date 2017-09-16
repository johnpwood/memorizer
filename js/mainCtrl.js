angular.module('poetryApp').controller('mainCtrl', function($scope){
  var rando = "views/stacks" + Math.floor(Math.random()*8) + ".jpeg";
  $scope.sty = {
      'background': 'url(' + rando + ') no-repeat center center',
                      'background-size': 'cover'
                    }
})
