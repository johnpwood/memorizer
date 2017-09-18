angular.module('poetryApp', ['ui.router']).config(
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("find");
    $stateProvider.state('find', {
      url:"/find",
      templateUrl:"views/find.html",
      controller:"findCtrl",
      data: {'backgroundType':'stacks','images':7}
    }).state('read', {
      url:"/read",
      templateUrl: "views/read.html",
      controller: "readCtrl",
      data: {'backgroundType':'study', 'images':9}
    }).state('memorize', {
      url:"/memorize/:step",
      templateUrl:"views/memorize.html",
      controller:"memorizeCtrl",
      data: {'backgroundType':'study', 'images':9}
    })
    //$urlRouterProvider.when('/', '/find');
  }
)
.run([
    '$rootScope', function($rootScope)
    {
        $rootScope.$on('$stateChangeStart', function(event, toState)
        {
          var rando = Math.floor(Math.random()*toState.data.images)
          $rootScope.backgroundStyle = {
          'background': 'url(views/' + toState.data.backgroundType + rando + '.jpeg) no-repeat center center',
          'background-size': 'cover',
          'box-shadow': 'inset 0 0 0 1000px rgba(0,0,0,.5)'
          }
        });
    }
]);
