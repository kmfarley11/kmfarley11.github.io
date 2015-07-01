// The controller is a regular JavaScript function. It is called
// once when AngularJS runs into the ng-controller declaration.

function EPorfolioController($scope){
	
	$scope.showtooltip = false;
	$scope.value = 'Edit me.';
	$scope.selected = 'home';
	
	$scope.newSelection = function(e){
		var selection = e.originalEvent.currentTarget.attributes.link;
		if(selection)
			$scope.selected = selection.value;
	};
}
