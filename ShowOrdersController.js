sampleApp.lazy.controller('ShowOrdersController', function($scope, $route) {
	
	var dataFromRootProvider = $route.current.customData;
	
// 	alert (dataFromRootProvider);
	
    $scope.message = 'This is ShowOrdersController ';
 
});