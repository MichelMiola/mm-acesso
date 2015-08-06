(function (angular) {

	angular.module('app', [
			'ui.router',	
			'ngResource',
			'br.com.michel.templates',
			'br.com.michel.login'
		])

	.config(function($stateProvider, $urlRouterProvider, $injector){
		$urlRouterProvider.otherwise(function ($injector) {
				$injector.invoke(function ($state) {
					$state.transitionTo('login');
				});
			});
		$stateProvider
				.state('login', {
					url: '/login',					
					templateUrl: 'modules/login/views/login-tpl.html',
					controller:	'loginCtrl'						
		
				});

	})
	.run(function($state, $rootScope){
		$rootScope.$on('$stateChangeStart',
			function(event, toState, toParams, fromState, fromParams){     			
    			console.log('Passou');
		});
	});

})(angular);

