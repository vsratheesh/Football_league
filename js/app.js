var angularApp = angular.module('Football_Leauges', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',{
    templateUrl : 'templates/Home.html',
    controller: 'HomeController',
  })
  .when('/',{
  	templateUrl : 'templates/Leagues.html',
  	controller : 'LeaguesController',
  })
  .when('/',{
  	templateUrl : 'templates/Matches.html',
  	controller : 'MatchesController',
  })
  .when('/',{
  	templateUrl : 'templates/Team.html',
  	controller : 'TeamController'
  })