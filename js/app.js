var angularApp = angular.module('Football_Leauges', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider,$httpProvider){
	$httpProvider.defaults.headers.get = { 'X-Auth-Token' : '4f2de580e2a84e1a8c7f6714d2fbef17'}
	$routeProvider
	.when ('/',{
		templateUrl : 'templates/Home.html',
		controller: 'HomeController',
		controllerAs : 'hc'
	})
	.otherwise({
		redirectTo: '/'
	});
})
  // .when('/',{
  // 	templateUrl : 'templates/Leagues.html',
  // 	controller : 'LeaguesController',
  // 	controllerAs : 'lc',
  // })
  // .when('/',{
  // 	templateUrl : 'templates/Matches.html',
  // 	controller : 'MatchesController',
  // 	controllerAs : 'mc',
  // })
  // .when('/',{
  // 	templateUrl : 'templates/Team.html',
  // 	controller : 'TeamController'
  // 	controllerAs : 'tc',
  // })



angularApp.controller("HomeController",['$resource','$http',function($resource,$routeParams,$http){
  var vm=this;
  var footballResource = $resource('http://api.football-data.org/v1/soccerseasons');
  vm.football_leauges = footballResource.query();
  console.log(vm.football_leauges);
}]);

//    var HomeDetails = $resource('http://api.football-data.org/v1/soccerseasons', {}, {
//     get: {
//         method: 'GET',
//         headers: { 'X-Auth-Token' : '4f2de580e2a84e1a8c7f6714d2fbef17' }
//     }
// });

//    // $httpProvider.defaults.headers.get = { 'X-Auth-Token' : '4f2de580e2a84e1a8c7f6714d2fbef17' }
//    // vm.response = HomeDetails.get('http://api.football-data.org/v1/soccerseasons');
//    console.log(HomeDetails);
 
//         var User = $resource('http://api.football-data.org/v1/soccerseasons', {}, {
     
//         });
//         var data = User.get().$promise.then(function(result){
//         	console.log(result);
//         }, function(error){
//         	console.log('error',error);
//         })
// }]);
