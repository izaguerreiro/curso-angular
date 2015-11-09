angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
	var ddo = {};
	
	ddo.restrict = "AE";
	ddo.scope = {
		titulo: '@',
	};

	ddo.template = 
			'<div class="panel panel-default">'
		+	'	<div class="panel-heading">'
        +	'		<h3 class="panel-title">{{foto.titulo}}</h3>'
        +	'	</div>'

        +   '   <div class="panel-body">'
        +   '   </div>'
        +   '</div>'

	return ddo;
});