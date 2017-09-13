angular.module('poetryApp', ['ui.router']).config(
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("find");
    $stateProvider.state('find', {
      url:"/find",
      templateUrl:"views/find.html",
      controller:"findCtrl"
    }).state('read', {
      url:"/read",
      templateUrl: "views/read.html",
      controller: "readCtrl"
    }).state('memorize', {
      url:"/memorize",
      templateUrl:"views/memorize.html",
      controller:"memorizeCtrl"
    })
  })
