var angularApp = angular.module('Football_Leauges', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider,$httpProvider){
	$httpProvider.defaults.headers.get = { 'X-Auth-Token' : '4f2de580e2a84e1a8c7f6714d2fbef17'}
	$routeProvider
	.when ('/',{
		templateUrl : 'templates/Home.html',
		controller: 'HomeController',
		controllerAs : 'hc'
	})

	.when('/football_response/:uniqId',{
		templateUrl : 'templates/Team.html',
		controller : 'TeamController',
		controllerAs : 'tc'
	})
  .when('/team_fixtures',{
  	templateUrl : 'templates/Fixtures.html',
  	controller : 'FixturesController',
  	controllerAs : 'fc'
  })
  .otherwise({
  	redirectTo: '/'
  });
})
  // .when('/',{
  // 	templateUrl : 'templates/Matches.html',
  // 	controller : 'MatchesController',
  // 	controllerAs : 'mc',
  // })

angularApp.service("myService",function(){
	var vm = this;
	vm.api = '';
});

angularApp.controller("HomeController",['$resource',function($resource){
	var vm=this;
	var footballResource = $resource('http://api.football-data.org/v1/soccerseasons');
	vm.football_leauges = footballResource.query();
	console.log(vm.football_leauges);
}]);

angularApp.controller("TeamController",['$resource','$filter','$routeParams','myService',function($resource,$filter,$routeParams,myService){
	var vm=this;
	var id = $routeParams.uniqId;
	var football_response = $resource('http://api.football-data.org/v1/soccerseasons/'+ id +'/teams');
	vm.football_teams = football_response.get();
	console.log(vm.football_teams);

	vm.fixtures = function(api){
		myService.api = api;
		console.log("jndfdn");
	}

}]);

angularApp.controller("FixturesController",['$resource','$filter','$routeParams','myService',function($resource,$filter,$routeParams,myService){
	var vm=this;
	vm.fixturesApi = myService.api;
	vm.getFixtures = $resource(vm.fixturesApi).get();
	console.log(vm.getFixtures);
}]);
