angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/principal.html', 
		controller: 'FotosController'
	});
	
	$routeProvider.when('/fotos/new', {
		templateUrl: 'partials/fotos.html', 
	});
	
	$routeProvider.otherwise({redirectTo: '/fotos'});
});