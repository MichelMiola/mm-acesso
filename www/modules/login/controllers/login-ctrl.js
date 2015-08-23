
(function (angular) {
	angular.module('br.com.michel.login')
		.controller('loginCtrl', function($scope, uiGmapIsReady){

		$scope.controller = "loginCtrl";
		$scope.map = { 
			'center': {	latitude: 45,longitude: -73 },
			'control': { latitude: 45,longitude: -73 }, 
			'zoom': 8			            
		};

		$scope.loadMap = function(){			
			console.log($scope.map.control);
			google.maps.event.trigger($scope.map.control.getGMap(), "resize"); 			
		};				

	});

})(angular);