angular.module('alurapic').controller('FotoController', function($scope, $http){
	$scope.foto = {};
	$scope.mensagem = '';
	
	$scope.submeter = function(){
		if ($scope.formulario.$valid){
			$http.post('v1/fotos', $scope.foto)
			.success(function(){
				$scope.foto = {};
				$scope.mensagem = 'Foto incluída com sucesso!'
			})
			.error(function(erro){
				$scope.mensagem = 'Não foi possível incluir a foto!'
			});
		};
	};
});