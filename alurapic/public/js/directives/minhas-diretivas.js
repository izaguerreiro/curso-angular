angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
	var ddo = {};
	
	ddo.restrict = "AE";
	ddo.scope = {
		titulo: '@',
	};

	ddo.transclude = true;

	ddo.templateUrl = 'js/directives/meu-painel.html'

	return ddo;
})
.directive('minhaFoto', function() {
	var ddo = {};

	ddo.restrict = "AE";
	ddo.scope = {
		titulo: '@',
		url: '@'
	};

	ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
        
	return ddo;
})
.directive('meuBotaoPerigo', function() {
	var ddo = {};

	ddo.restrict = "E";
	ddo.scope = {
		nome: '@',
		acao: '&'
	};

	ddo.template = '<button ng-click="acao()" class="btn btn-danger btn-block">{{nome}}</button>';           
        
	return ddo;
})
.directive('meuFoco', function(){
	var ddo = {};

	ddo.restrict = "A";
	ddo.scope = {
		focado: '=',
	}
	
	ddo.link = function(scope, element){
		
	};

	return ddo;
});