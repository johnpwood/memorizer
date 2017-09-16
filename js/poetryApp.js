angular.module('poetryApp', ['ui.router']).config(
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("find");
    $stateProvider.state('find', {
      url:"/find",
      templateUrl:"views/find.html",
      controller:"findCtrl"
      data: {backgroundType:'stacks'}
    }).state('read', {
      url:"/read",
      templateUrl: "views/read.html",
      controller: "readCtrl"
      data: {backgroundType:'study'}
    }).state('memorize', {
      url:"/memorize",
      templateUrl:"views/memorize.html",
      controller:"memorizeCtrl"
      data: {backgroundType:'study'}
    })
  })
